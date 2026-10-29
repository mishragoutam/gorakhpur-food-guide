import {
  Users,
  UtensilsCrossed,
  Sparkles,
  Share2,
  Copy,
  Check,
  CheckCircle2,
  ThumbsUp,
  AlertCircle,
  ArrowRight,
  RefreshCw,
  Trophy,
  MapPin,
  ShieldAlert,
  QrCode,
} from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { StarRating } from '@/components/ui/StarRating';
import { RestaurantQrModal } from '@/components/qr/RestaurantQrModal';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useRestaurants } from '@/hooks/useRestaurants';
import { showToast } from '@/lib/toast';
import { ROUTES } from '@/lib/routes';
import {
  groupDiningService,
  getCurrentParticipantId,
} from '@/services/groupDiningService';
import type {
  DietaryPreference,
  GroupSession,
  ParticipantPreference,
  SpicePreference,
} from '@/types/groupDining';
import type { Restaurant } from '@/types/restaurant';

const AVAILABLE_CUISINES = [
  'North Indian',
  'Mughlai',
  'Chinese',
  'Indo-Chinese',
  'Fast Food',
  'Pizza',
  'Cafe',
  'Bakery',
  'Sweets',
  'Mithai',
  'Street Food',
  'Chaat',
  'Biryani',
];

const GORAKHPUR_AREAS = [
  'Golghar',
  'Civil Lines',
  'Medical College Road',
  'Betiahata',
  'Asuran Chowk',
  'Taramandal',
  'Mohaddipur',
  'Rustampur',
];

const EMPTY_RESTAURANTS: readonly Restaurant[] = [];

function getTimestampIso(): string {
  return new Date().toISOString();
}

export default function GroupDiningPage() {
  usePageTitle('Decide Together | Group Dining & Voting');
  const { sessionId } = useParams<{ sessionId?: string }>();
  const navigate = useNavigate();
  const restaurantsQuery = useRestaurants();
  const allRestaurants = useMemo(() => {
    if (restaurantsQuery.status === 'ready') {
      return restaurantsQuery.data;
    }
    return EMPTY_RESTAURANTS;
  }, [restaurantsQuery]);

  const [currentSession, setCurrentSession] = useState<GroupSession | null>(null);
  const [loading, setLoading] = useState(Boolean(sessionId));
  const [error, setError] = useState<string | null>(null);

  // Creation form state
  const [newTitle, setNewTitle] = useState('Weekend Dinner with Friends');
  const [newHostName, setNewHostName] = useState('');
  const [newTargetBudget, setNewTargetBudget] = useState<number>(400);
  const [newTargetArea, setNewTargetArea] = useState('Golghar');
  const [joinCode, setJoinCode] = useState('');

  // Preference form state
  const currentParticipantId = getCurrentParticipantId();
  const [pName, setPName] = useState('');
  const [pDiet, setPDiet] = useState<DietaryPreference>('flexible');
  const [pBudget, setPBudget] = useState<number>(450);
  const [pCuisines, setPCuisines] = useState<string[]>(['North Indian']);
  const [pSpice, setPSpice] = useState<SpicePreference>('medium');
  const [pAreas, setPAreas] = useState<string[]>(['Golghar']);
  const [pMustHave, setPMustHave] = useState('');
  const [pAvoid, setPAvoid] = useState('');
  const [pDessert, setPDessert] = useState(false);
  const [pAllergy, setPAllergy] = useState('');
  const [prefSubmitted, setPrefSubmitted] = useState(false);

  // QR Modal
  const [selectedRestForQr, setSelectedRestForQr] = useState<Restaurant | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Subscribe to session updates
  useEffect(() => {
    if (!sessionId) {
      return;
    }

    groupDiningService
      .getSession(sessionId)
      .then((sess) => {
        if (!sess) {
          setError(`Session "${sessionId}" not found. It may have expired.`);
        } else {
          setCurrentSession(sess);
          // Check if current user already submitted
          const existing = sess.participants.find((p) => p.participantId === currentParticipantId);
          if (existing) {
            setPName(existing.name);
            setPDiet(existing.diet);
            setPBudget(existing.maxBudgetPerPerson);
            setPCuisines(existing.cuisines);
            setPSpice(existing.spiceLevel);
            setPAreas(existing.preferredAreas || []);
            setPMustHave((existing.mustHaves || []).join(', '));
            setPAvoid((existing.avoidFoods || []).join(', '));
            setPDessert(Boolean(existing.wantsDessert));
            setPAllergy(existing.allergyNotes || '');
            setPrefSubmitted(true);
          }
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Error loading session');
      })
      .finally(() => setLoading(false));

    const unsub = groupDiningService.subscribe(sessionId, (updated) => {
      setCurrentSession(updated);
    });

    return () => unsub();
  }, [sessionId, currentParticipantId]);

  // Handle Create Session
  const handleCreateSession = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHostName.trim()) {
      showToast('Please enter your name as the host', 'error');
      return;
    }

    try {
      setLoading(true);
      const session = await groupDiningService.createSession({
        title: newTitle.trim() || 'Dining Outing',
        creatorName: newHostName.trim(),
        targetBudget: newTargetBudget,
        targetArea: newTargetArea,
      });

      // Auto-submit host as first participant
      const hostPref: ParticipantPreference = {
        participantId: currentParticipantId,
        name: newHostName.trim(),
        diet: 'flexible',
        maxBudgetPerPerson: newTargetBudget,
        cuisines: ['North Indian'],
        spiceLevel: 'medium',
        preferredAreas: [newTargetArea],
        submittedAt: getTimestampIso(),
      };
      await groupDiningService.submitPreferences(session.id, hostPref);

      showToast('Group session created! Invite your friends.');
      navigate(`/decide-together/${session.id}`);
    } catch {
      showToast('Could not create session', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle Submit Preferences
  const handleSubmitPreferences = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentSession) return;
    if (!pName.trim()) {
      showToast('Please enter your name or nickname', 'error');
      return;
    }

    const pref: ParticipantPreference = {
      participantId: currentParticipantId,
      name: pName.trim(),
      diet: pDiet,
      maxBudgetPerPerson: pBudget,
      cuisines: pCuisines,
      spiceLevel: pSpice,
      preferredAreas: pAreas,
      mustHaves: pMustHave ? pMustHave.split(',').map((s) => s.trim()).filter(Boolean) : [],
      avoidFoods: pAvoid ? pAvoid.split(',').map((s) => s.trim()).filter(Boolean) : [],
      wantsDessert: pDessert,
      allergyNotes: pAllergy.trim(),
      submittedAt: getTimestampIso(),
    };

    try {
      const updated = await groupDiningService.submitPreferences(currentSession.id, pref);
      setCurrentSession(updated);
      setPrefSubmitted(true);
      showToast(`Saved preferences for ${pName.trim()}!`);
    } catch {
      showToast('Failed to save preferences', 'error');
    }
  };

  // Handle Generate Recommendations
  const handleGenerateRecommendations = async () => {
    if (!currentSession) return;
    if (!currentSession.participants.length) {
      showToast('Wait for at least one person to submit preferences', 'error');
      return;
    }

    try {
      setLoading(true);
      const updated = await groupDiningService.generateRecommendations(
        currentSession.id,
        allRestaurants,
      );
      setCurrentSession(updated);
      showToast('Top 3 restaurant recommendations calculated!');
    } catch {
      showToast('Error calculating recommendations', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle Cast Vote
  const handleVote = async (restaurantId: string) => {
    if (!currentSession) return;
    const voterName = pName.trim() || currentSession.creatorName || 'Anonymous Foodie';

    try {
      const updated = await groupDiningService.castVote(currentSession.id, {
        participantId: currentParticipantId,
        participantName: voterName,
        restaurantId,
        votedAt: getTimestampIso(),
      });
      setCurrentSession(updated);
      showToast('Your vote has been recorded!');
    } catch {
      showToast('Failed to record vote', 'error');
    }
  };

  // Handle Finalize Decision
  const handleFinalize = async () => {
    if (!currentSession) return;
    try {
      const updated = await groupDiningService.finalizeDecision(currentSession.id);
      setCurrentSession(updated);
      showToast('Voting closed! Group consensus decided.');
    } catch {
      showToast('Failed to finalize decision', 'error');
    }
  };

  // Handle Revote
  const handleRevote = async () => {
    if (!currentSession) return;
    try {
      const updated = await groupDiningService.resetVoting(currentSession.id);
      setCurrentSession(updated);
      showToast('Voting opened for a fresh round!');
    } catch {
      showToast('Failed to reset voting', 'error');
    }
  };

  // Copy or Share Invitation Link
  const inviteUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/decide-together/${currentSession?.id || ''}`
    : '';

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopiedLink(true);
      showToast('Invitation link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // fallback
    }
  };

  const shareInviteLink = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `Join our Group Dining session: ${currentSession?.title}`,
          text: `We are picking where to eat in Gorakhpur! Put in your food preferences and vote together:`,
          url: inviteUrl,
        });
        return;
      } catch {
        // user aborted or not supported
      }
    }
    copyInviteLink();
  };

  // Helper toggle cuisine
  const toggleCuisine = (c: string) => {
    setPCuisines((prev) =>
      prev.includes(c) ? prev.filter((item) => item !== c) : [...prev, c],
    );
  };

  const toggleArea = (a: string) => {
    setPAreas((prev) =>
      prev.includes(a) ? prev.filter((item) => item !== a) : [...prev, a],
    );
  };

  // Voting metrics
  const voteTallies = useMemo(() => {
    if (!currentSession) return {};
    const map: Record<string, number> = {};
    for (const v of currentSession.votes) {
      map[v.restaurantId] = (map[v.restaurantId] || 0) + 1;
    }
    return map;
  }, [currentSession]);

  const myVote = currentSession?.votes.find((v) => v.participantId === currentParticipantId);

  // Winning restaurant lookup
  const winningRestaurant = useMemo(() => {
    if (!currentSession?.winningRestaurantId) return null;
    return allRestaurants.find((r) => r.id === currentSession.winningRestaurantId) || null;
  }, [currentSession, allRestaurants]);

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* Header Breadcrumbs & Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest-300 bg-forest-50 px-4 py-1.5 text-xs font-bold text-forest-800">
            <Users size={15} />
            <span>Decide Together • ग्रुप डाइनिंग वोटिंग</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl md:text-5xl">
            Where Should We Eat in Gorakhpur?
          </h1>
          <p className="mt-3 text-base text-ink-600 sm:text-lg max-w-2xl mx-auto">
            No more endless WhatsApp debates. Pool everyone's diets, budgets, and cravings to get deterministic top 3 recommendations and vote for the winner.
          </p>

          {error ? (
            <div className="mt-6 mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-800 flex items-center gap-2">
              <AlertCircle size={18} className="shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          ) : null}
        </div>

        {/* 1. STATE: NO SESSION ACTIVE (Create or Join) */}
        {!sessionId ? (
          <div className="mt-12 mx-auto max-w-2xl">
            <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-ink-900 flex items-center gap-2">
                <UtensilsCrossed className="text-accent-700" size={22} />
                Host a Group Outing
              </h2>
              <p className="mt-1 text-xs text-ink-500">
                Create a quick session and share the link with 3 to 10 friends.
              </p>

              <form onSubmit={handleCreateSession} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                    Your Name / Nickname (Host) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newHostName}
                    onChange={(e) => setNewHostName(e.target.value)}
                    placeholder="e.g. Rahul or Priya"
                    className="w-full rounded-2xl border border-cream-300 bg-cream-50/50 px-4 py-3 text-sm text-ink-900 focus:border-forest-600 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                    Outing Occasion / Group Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. College Reunion or Friday Night Dinner"
                    className="w-full rounded-2xl border border-cream-300 bg-cream-50/50 px-4 py-3 text-sm text-ink-900 focus:border-forest-600 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                      Target Budget / Person (₹)
                    </label>
                    <input
                      type="number"
                      min={100}
                      max={2500}
                      step={50}
                      value={newTargetBudget}
                      onChange={(e) => setNewTargetBudget(Number(e.target.value))}
                      className="w-full rounded-2xl border border-cream-300 bg-cream-50/50 px-4 py-3 text-sm text-ink-900 focus:border-forest-600 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                      Preferred Area
                    </label>
                    <select
                      value={newTargetArea}
                      onChange={(e) => setNewTargetArea(e.target.value)}
                      className="w-full rounded-2xl border border-cream-300 bg-cream-50/50 px-4 py-3 text-sm text-ink-900 focus:border-forest-600 focus:bg-white focus:outline-hidden"
                    >
                      {GORAKHPUR_AREAS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-forest-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-forest-700 disabled:opacity-50"
                >
                  <Sparkles size={18} />
                  {loading ? 'Creating Outing…' : 'Start Group Dining Session'}
                </button>
              </form>

              {/* Join Existing Section */}
              <div className="mt-8 pt-6 border-t border-cream-200">
                <h3 className="text-sm font-bold text-ink-900">Have an invite code?</h3>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.trim())}
                    placeholder="Paste session code (e.g. grp-xyz)"
                    className="flex-1 rounded-2xl border border-cream-300 bg-cream-50/50 px-4 py-2.5 text-xs text-ink-900 focus:border-forest-600 focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (joinCode) navigate(`/decide-together/${joinCode}`);
                    }}
                    className="rounded-2xl border border-forest-600 bg-forest-50 px-5 py-2.5 text-xs font-bold text-forest-800 hover:bg-forest-100"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* 2. STATE: ACTIVE GROUP SESSION */}
        {currentSession ? (
          <div className="mt-10 mx-auto max-w-4xl space-y-8">
            {/* Session Top Bar */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-forest-100 px-3 py-0.5 text-xs font-bold text-forest-800">
                      {currentSession.status === 'collecting' && 'Step 1: Collecting Preferences'}
                      {currentSession.status === 'voting' && 'Step 2: Voting Active'}
                      {currentSession.status === 'decided' && 'Decision Consensused!'}
                    </span>
                    <span className="text-xs text-ink-500">Host: {currentSession.creatorName}</span>
                  </div>
                  <h2 className="mt-1 text-2xl font-extrabold text-ink-900">{currentSession.title}</h2>
                  <p className="text-xs text-ink-600">
                    {currentSession.participants.length} friends joined • Target ~₹{currentSession.targetBudget || 400}/person in {currentSession.targetArea || 'Gorakhpur'}
                  </p>
                </div>

                {/* Share Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={shareInviteLink}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700"
                  >
                    <Share2 size={14} />
                    Invite Friends
                  </button>
                  <button
                    type="button"
                    onClick={copyInviteLink}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-cream-50 px-3.5 py-2 text-xs font-semibold text-ink-800 hover:bg-cream-100"
                  >
                    {copiedLink ? <Check size={14} className="text-forest-600" /> : <Copy size={14} />}
                    {copiedLink ? 'Copied' : 'Copy Code'}
                  </button>
                </div>
              </div>
            </div>

            {/* Winning Decision Banner (if status is decided) */}
            {currentSession.status === 'decided' && winningRestaurant ? (
              <div className="rounded-3xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50/60 p-6 sm:p-8 shadow-md text-center">
                <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm">
                  <Trophy size={30} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                  Winning Restaurant Consensus
                </span>
                <h3 className="mt-1 text-3xl font-extrabold text-ink-900">{winningRestaurant.name}</h3>
                <p className="mt-1 font-medium text-sm text-ink-700">
                  {winningRestaurant.cuisines.join(' · ')} • {winningRestaurant.area}
                </p>

                <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-2.5 shadow-xs text-xs font-bold text-ink-800">
                  <span>₹{winningRestaurant.costForTwo} for two (~₹{Math.round(winningRestaurant.costForTwo / 2)}/person)</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <StarRating rating={winningRestaurant.averageRating} size={14} />
                    <span>{winningRestaurant.averageRating}★</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    to={ROUTES.restaurant(winningRestaurant.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-forest-800"
                  >
                    View Menu & Directions <ArrowRight size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedRestForQr(winningRestaurant)}
                    className="inline-flex items-center gap-2 rounded-full border border-forest-600 bg-white px-5 py-3 text-sm font-bold text-forest-800 hover:bg-forest-50"
                  >
                    <QrCode size={16} /> View Table QR
                  </button>
                  <button
                    type="button"
                    onClick={handleRevote}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-4 py-3 text-xs font-semibold text-ink-700 hover:bg-cream-100"
                  >
                    <RefreshCw size={14} /> Fresh Revote
                  </button>
                </div>
              </div>
            ) : null}

            {/* Grid: Preferences Form & Active Participants */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left 2 Cols: Preference Form */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-ink-900">
                        {prefSubmitted ? 'Your Submitted Preferences' : 'Enter Your Preferences'}
                      </h3>
                      <p className="text-xs text-ink-500">
                        Your inputs are scored anonymously to find the fairest match for everyone.
                      </p>
                    </div>
                    {prefSubmitted ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                        <CheckCircle2 size={13} /> Saved
                      </span>
                    ) : null}
                  </div>

                  <form onSubmit={handleSubmitPreferences} className="mt-6 space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                        Your Name / Nickname *
                      </label>
                      <input
                        type="text"
                        required
                        value={pName}
                        onChange={(e) => setPName(e.target.value)}
                        placeholder="e.g. Aarav, Meera"
                        className="w-full rounded-2xl border border-cream-300 bg-cream-50/50 px-4 py-2.5 text-sm text-ink-900 focus:border-forest-600 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    {/* Dietary Restriction */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                        Dietary Preference *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(
                          [
                            { id: 'veg', label: 'Strict Pure Veg' },
                            { id: 'nonveg', label: 'Non-Veg OK' },
                            { id: 'vegan', label: 'Vegan' },
                            { id: 'flexible', label: 'Anything / Flexible' },
                          ] as const
                        ).map((d) => (
                          <button
                            key={d.id}
                            type="button"
                            onClick={() => setPDiet(d.id)}
                            className={`rounded-2xl border p-3 text-xs font-bold transition text-center ${
                              pDiet === d.id
                                ? 'border-forest-600 bg-forest-600 text-white shadow-xs'
                                : 'border-cream-300 bg-cream-50 text-ink-700 hover:bg-cream-100'
                            }`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink-700">
                          Your Max Per-Person Budget
                        </label>
                        <span className="text-sm font-extrabold text-forest-700">₹{pBudget}</span>
                      </div>
                      <input
                        type="range"
                        min={150}
                        max={1200}
                        step={50}
                        value={pBudget}
                        onChange={(e) => setPBudget(Number(e.target.value))}
                        className="w-full accent-forest-600"
                      />
                      <div className="flex justify-between text-[11px] text-ink-500">
                        <span>₹150 (Street/Budget)</span>
                        <span>₹500 (Casual Dine)</span>
                        <span>₹1200+ (Fine Dine)</span>
                      </div>
                    </div>

                    {/* Cuisines Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                        Cuisines You're Craving (Pick 1 or more)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {AVAILABLE_CUISINES.map((c) => {
                          const active = pCuisines.includes(c);
                          return (
                            <button
                              key={c}
                              type="button"
                              onClick={() => toggleCuisine(c)}
                              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                                active
                                  ? 'bg-accent-600 text-white shadow-2xs font-semibold'
                                  : 'border border-cream-300 bg-cream-50 text-ink-700 hover:bg-cream-100'
                              }`}
                            >
                              {c}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Preferred Area */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1.5">
                        Preferred Gorakhpur Areas
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {GORAKHPUR_AREAS.map((a) => {
                          const active = pAreas.includes(a);
                          return (
                            <button
                              key={a}
                              type="button"
                              onClick={() => toggleArea(a)}
                              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                                active
                                  ? 'bg-forest-700 text-white font-semibold'
                                  : 'border border-cream-300 bg-cream-50 text-ink-700 hover:bg-cream-100'
                              }`}
                            >
                              {a}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Allergy & Disclaimer */}
                    <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950">
                      <div className="flex items-center gap-1.5 font-bold text-amber-900">
                        <ShieldAlert size={15} />
                        <span>Dietary & Allergen Notice</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-amber-900/90">
                        Voluntary notes help find friendly menus, but please confirm ingredients and cross-contact directly with the restaurant before dining.
                      </p>
                      <input
                        type="text"
                        value={pAllergy}
                        onChange={(e) => setPAllergy(e.target.value)}
                        placeholder="Optional allergy notes (e.g. Peanut, Lactose)"
                        className="mt-2 w-full rounded-xl border border-amber-300 bg-white px-3 py-1.5 text-xs text-ink-900 focus:outline-hidden"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-forest-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-forest-700"
                      >
                        <Check size={16} />
                        {prefSubmitted ? 'Update My Preferences' : 'Save My Preferences'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Col: Participants Roster & Generation Trigger */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-ink-900">Room Participants</h3>
                    <span className="rounded-full bg-forest-100 px-2.5 py-0.5 text-xs font-bold text-forest-800">
                      {currentSession.participants.length} Ready
                    </span>
                  </div>

                  <div className="mt-4 divide-y divide-cream-100">
                    {currentSession.participants.length > 0 ? (
                      currentSession.participants.map((p) => (
                        <div key={p.participantId} className="py-2.5 first:pt-0 last:pb-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="flex size-7 items-center justify-center rounded-full bg-accent-100 text-xs font-bold text-accent-800">
                                {p.name[0]?.toUpperCase() || 'P'}
                              </div>
                              <span className="text-xs font-bold text-ink-900">
                                {p.name} {p.participantId === currentParticipantId ? '(You)' : ''}
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-forest-700">
                              ₹{p.maxBudgetPerPerson}
                            </span>
                          </div>
                          <div className="mt-1 flex flex-wrap gap-1 text-[10px]">
                            <span className="rounded-md bg-cream-100 px-1.5 py-0.5 text-ink-600">
                              {p.diet}
                            </span>
                            <span className="rounded-md bg-cream-100 px-1.5 py-0.5 text-ink-600">
                              {p.cuisines.slice(0, 2).join(', ')}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="py-4 text-center text-xs text-ink-500">
                        No one has submitted preferences yet. Be the first!
                      </p>
                    )}
                  </div>

                  {/* Recommendation Generator Trigger */}
                  <div className="mt-6 pt-5 border-t border-cream-200">
                    <button
                      type="button"
                      onClick={handleGenerateRecommendations}
                      disabled={loading || currentSession.participants.length === 0}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-600 py-3 text-xs font-bold text-white shadow-xs hover:bg-accent-700 disabled:opacity-50"
                    >
                      <Sparkles size={16} />
                      {currentSession.recommendations.length > 0
                        ? 'Recalculate Top 3'
                        : 'Calculate Best 3 Restaurants'}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-ink-500">
                      Balances dietary hard constraints, individual budgets & group fairness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. RECOMMENDATIONS & VOTING SECTION */}
            {currentSession.recommendations && currentSession.recommendations.length > 0 ? (
              <div className="mt-12 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-cream-300 pb-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-ink-900">
                      Top 3 Group Matches & Voting
                    </h3>
                    <p className="text-xs text-ink-600">
                      Based on all {currentSession.participants.length} member preferences. Click "Vote" to pick your top choice.
                    </p>
                  </div>

                  {/* Host Decision Finalizer */}
                  {currentSession.status === 'voting' ? (
                    <button
                      type="button"
                      onClick={handleFinalize}
                      className="inline-flex items-center gap-1.5 rounded-full bg-forest-700 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-forest-800"
                    >
                      <Trophy size={14} /> Finalize Decision
                    </button>
                  ) : null}
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {currentSession.recommendations.map((rec, idx) => {
                    const votesForThis = voteTallies[rec.restaurant.id] || 0;
                    const totalVotes = currentSession.votes.length;
                    const pct = totalVotes > 0 ? Math.round((votesForThis / totalVotes) * 100) : 0;
                    const isMyChoice = myVote?.restaurantId === rec.restaurant.id;

                    return (
                      <div
                        key={rec.restaurant.id}
                        className={`flex flex-col justify-between rounded-3xl border-2 bg-white p-6 shadow-sm transition hover:shadow-md ${
                          isMyChoice ? 'border-accent-600 ring-2 ring-accent-600/20' : 'border-cream-300'
                        }`}
                      >
                        <div>
                          {/* Score Badge */}
                          <div className="flex items-center justify-between">
                            <span className="flex size-7 items-center justify-center rounded-full bg-cream-200 text-xs font-bold text-ink-900">
                              #{idx + 1}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 px-3 py-1 text-xs font-extrabold text-forest-800">
                              <Sparkles size={13} /> {rec.score}% Match
                            </span>
                          </div>

                          <h4 className="mt-3 text-lg font-bold text-ink-900">
                            {rec.restaurant.name}
                          </h4>
                          <p className="text-xs font-medium text-ink-600">
                            {rec.restaurant.cuisines.join(' · ')}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-xs text-ink-500">
                            <MapPin size={13} className="text-accent-700 shrink-0" />
                            {rec.restaurant.area}
                          </p>

                          <div className="mt-3 flex items-center justify-between rounded-xl bg-cream-50 p-2 text-xs font-semibold text-ink-800">
                            <span>Est. Cost: ~₹{rec.estimatedCostPerPerson}/person</span>
                            <span>{rec.restaurant.averageRating}★</span>
                          </div>

                          {/* Matched Highlights */}
                          <div className="mt-3 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700">
                              Why it matches:
                            </span>
                            <ul className="space-y-1 text-xs text-ink-700">
                              {rec.matchedPreferences.slice(0, 3).map((m) => (
                                <li key={m} className="flex items-start gap-1.5">
                                  <Check size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{m}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Compromises / Caveats */}
                          {rec.compromises.length > 0 ? (
                            <div className="mt-2.5 rounded-xl bg-amber-50/60 p-2 text-[11px] text-amber-900">
                              <span className="font-bold">Note: </span>
                              {rec.compromises[0]}
                            </div>
                          ) : null}
                        </div>

                        {/* Voting Action */}
                        <div className="mt-6 pt-4 border-t border-cream-200">
                          {/* Live Votes Progress */}
                          <div className="mb-3">
                            <div className="flex justify-between text-xs font-bold text-ink-800 mb-1">
                              <span>Votes: {votesForThis}</span>
                              <span>{pct}%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-cream-200">
                              <div
                                className="h-full bg-accent-600 transition-all duration-300"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => handleVote(rec.restaurant.id)}
                              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition ${
                                isMyChoice
                                  ? 'bg-accent-600 text-white shadow-xs'
                                  : 'border border-cream-300 bg-white text-ink-800 hover:border-accent-600 hover:text-accent-700'
                              }`}
                            >
                              <ThumbsUp size={14} />
                              {isMyChoice ? 'Your Vote' : 'Vote This'}
                            </button>

                            <button
                              type="button"
                              onClick={() => setSelectedRestForQr(rec.restaurant)}
                              aria-label={`View QR Standee for ${rec.restaurant.name}`}
                              className="rounded-xl border border-cream-300 bg-cream-50 p-2.5 text-ink-700 hover:bg-cream-100"
                            >
                              <QrCode size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* QR Code Standee Modal */}
        <RestaurantQrModal
          isOpen={Boolean(selectedRestForQr)}
          restaurant={selectedRestForQr}
          onClose={() => setSelectedRestForQr(null)}
        />
      </Container>
    </div>
  );
}
