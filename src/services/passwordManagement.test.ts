import { beforeEach, describe, expect, it } from 'vitest';
import { storageService } from '@/services/storageService';

describe('Password Management & Verification', () => {
  beforeEach(() => {
    localStorage.clear();
    storageService.loadDemoData();
  });

  describe('Restaurant Owner Passwords', () => {
    it('verifies default demo password for restaurant owners', () => {
      // Default demo owner password is Vyora@2026 for owner@rateit.example
      const result = storageService.verifyOwnerPassword('owner@rateit.example', 'Vyora@2026');
      expect(result.valid).toBe(true);
      expect(result.restaurant).toBeDefined();

      const invalidResult = storageService.verifyOwnerPassword('owner@rateit.example', 'WrongPassword123');
      expect(invalidResult.valid).toBe(false);
      expect(invalidResult.error).toContain('Incorrect password');
    });

    it('allows setting and verifying a custom owner password for a registered restaurant', () => {
      const email = 'newowner@vyora.com';
      storageService.createRestaurant({
        id: 'new-rest-123',
        name: 'Grand Vyora Diner',
        cuisines: ['North Indian'],
        categories: ['north-indian'],
        area: 'Golghar',
        city: 'Gorakhpur',
        description: 'Speciality dining experience',
        popularDishes: ['Paneer Tikka', 'Dal Makhani'],
        averageRating: 4.8,
        reviewCount: 12,
        costForTwo: 500,
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        isDemo: false,
        ownerEmail: email,
        ownerName: 'Vikas Sharma',
      });

      storageService.setOwnerPassword(email, 'SecretPass@99');

      expect(storageService.verifyOwnerPassword(email, 'SecretPass@99').valid).toBe(true);
      expect(storageService.verifyOwnerPassword(email, 'WrongPass').valid).toBe(false);
    });

    it('changes an existing owner password with valid current credentials', () => {
      const restaurant = storageService.getRestaurants()[0];
      if (!restaurant) throw new Error('No restaurant found in test fixture');

      // Change password with wrong current password should fail
      const failedChange = storageService.changeOwnerPassword(restaurant.id, 'WrongCurrent', 'BrandNewPass123');
      expect(failedChange.success).toBe(false);
      expect(failedChange.error).toContain('Current password is incorrect');

      // Change password with correct current password should succeed
      const successfulChange = storageService.changeOwnerPassword(restaurant.id, 'Vyora@2026', 'BrandNewPass123');
      expect(successfulChange.success).toBe(true);

      // Now verify new password works and old one fails
      const ownerEmail = restaurant.ownerEmail || 'owner@rateit.example';
      expect(storageService.verifyOwnerPassword(ownerEmail, 'BrandNewPass123').valid).toBe(true);
      expect(storageService.verifyOwnerPassword(ownerEmail, 'Vyora@2026').valid).toBe(false);
    });
  });

  describe('Customer / Diner Passwords', () => {
    it('verifies default diner password for seeded users', () => {
      const validRes = storageService.verifyCustomerPassword('aarav@mail.com', 'Vyora@2026');
      expect(validRes.valid).toBe(true);
      expect(validRes.user).toBeDefined();

      const invalidRes = storageService.verifyCustomerPassword('aarav@mail.com', 'IncorrectPw');
      expect(invalidRes.valid).toBe(false);
      expect(invalidRes.error).toContain('Incorrect password');
    });

    it('registers a new customer with their chosen password', () => {
      const regResult = storageService.registerCustomerUser(
        'Amit Srivastava',
        'amit.srivastava@gmail.com',
        'DinerPass@2026',
      );

      expect(regResult.success).toBe(true);
      expect(regResult.user).toBeDefined();
      expect(regResult.user?.email).toBe('amit.srivastava@gmail.com');

      expect(storageService.verifyCustomerPassword('amit.srivastava@gmail.com', 'DinerPass@2026').valid).toBe(true);
      expect(storageService.verifyCustomerPassword('amit.srivastava@gmail.com', 'RandomGuess').valid).toBe(false);
    });

    it('updates customer password when current password matches', () => {
      const regResult = storageService.registerCustomerUser(
        'Pooja Mishra',
        'pooja.mishra@gmail.com',
        'InitialPassword1',
      );
      expect(regResult.success).toBe(true);

      // Attempt change with wrong current password
      const wrongAttempt = storageService.changeCustomerPassword('pooja.mishra@gmail.com', 'WrongPass', 'NewUpdatedPass123');
      expect(wrongAttempt.success).toBe(false);

      // Change with correct current password
      const validAttempt = storageService.changeCustomerPassword('pooja.mishra@gmail.com', 'InitialPassword1', 'NewUpdatedPass123');
      expect(validAttempt.success).toBe(true);

      // Verify new works, old fails
      expect(storageService.verifyCustomerPassword('pooja.mishra@gmail.com', 'NewUpdatedPass123').valid).toBe(true);
      expect(storageService.verifyCustomerPassword('pooja.mishra@gmail.com', 'InitialPassword1').valid).toBe(false);
    });
  });

  describe('Admin Master Credentials', () => {
    it('authenticates master admin with default password', () => {
      expect(storageService.verifyAdminPassword('admin@vyora.com', 'VyoraAdmin@2026').valid).toBe(true);
      expect(storageService.verifyAdminPassword('lazyotakumg@gmail.com', 'VyoraAdmin@2026').valid).toBe(true);
      expect(storageService.verifyAdminPassword('admin@vyora.com', 'AnyRandomString').valid).toBe(false);
      expect(storageService.verifyAdminPassword('unauthorized@test.com', 'VyoraAdmin@2026').valid).toBe(false);
    });

    it('changes master admin password', () => {
      const failResult = storageService.changeAdminPassword('WrongCurrentPw', 'SuperAdminSecret#2026');
      expect(failResult.success).toBe(false);

      const successResult = storageService.changeAdminPassword('VyoraAdmin@2026', 'SuperAdminSecret#2026');
      expect(successResult.success).toBe(true);

      expect(storageService.verifyAdminPassword('admin@vyora.com', 'SuperAdminSecret#2026').valid).toBe(true);
      expect(storageService.verifyAdminPassword('admin@vyora.com', 'VyoraAdmin@2026').valid).toBe(false);
    });
  });
});
