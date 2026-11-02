import fs from 'node:fs';
import path from 'node:path';

// Load restaurants to ensure IDs and names match exactly
const RESTAURANTS = [
  { id: 'chaudhary-sweet-house', name: 'Chaudhary Sweet House & Restaurant', area: 'Golghar', ownerName: 'Vikas Chaudhary' },
  { id: 'bobis-restaurant', name: 'Bobis Restaurant & Barbeque', area: 'Civil Lines', ownerName: 'Gurcharan Singh' },
  { id: 'lakefront-lounge', name: 'Lakefront Lounge & Bistro', area: 'Taramandal', ownerName: 'Aniket Srivastava' },
  { id: 'shriram-sweets', name: 'Shri Ram Sweets & Chaat Bhandar', area: 'Betiahata', ownerName: 'Ramesh Chandra Gupta' },
  { id: 'wokandroll-kitchen', name: 'Wok & Roll Asian Kitchen', area: 'Medical College Road', ownerName: 'Jason Chen' },
  { id: 'chai-stories-cafe', name: 'Chai & Stories Cafe', area: 'Betiahata', ownerName: 'Tanya Jaiswal' },
  { id: 'royal-awadh-darbar', name: 'Royal Awadh Darbar', area: 'Golghar', ownerName: 'Zafar Masood' },
  { id: 'brijwasi-sweets', name: 'Brijwasi Desi Ghee Sweets & Thali', area: 'Bank Road', ownerName: 'Harish Agarwal' },
  { id: 'burger-crust-hub', name: 'Burger & Crust Hub', area: 'Mohaddipur', ownerName: 'Rohit Sahani' },
  { id: 'taalview-rooftop', name: 'Taal View Rooftop Lounge', area: 'Taramandal', ownerName: 'Alok Tripathy' },
  { id: 'gagan-korma-corner', name: 'Gagan Korma & Biryani Corner', area: 'Shahpur', ownerName: 'Mohammad Gagan' },
  { id: 'golgappa-junction', name: 'Golgappa Junction & Chaat Bazaar', area: 'Asuran Chowk', ownerName: 'Pradeep Chaurasia' },
  { id: 'the-yellow-chilli-gkp', name: 'The Yellow Chilli by Sanjeev Kapoor', area: 'Civil Lines', ownerName: 'Ranveer Sachdeva' },
  { id: 'sagar-ratna-gorakhpur', name: 'Sagar Ratna Pure Veg', area: 'Golghar', ownerName: 'Subhash Rao' },
  { id: 'punjabi-dhaba-express', name: 'Pind Balluchi & Punjabi Dhaba', area: 'Mohaddipur', ownerName: 'Harpreet Singh' },
  { id: 'belgian-waffle-desserts', name: 'The Belgian Waffle & Crepes Co.', area: 'Betiahata', ownerName: 'Laurent Dubois & Megha' },
  { id: 'nawabi-zaika-biryani', name: 'Nawabi Zaika Biryani & Kebab Hub', area: 'Medical College Road', ownerName: 'Tariq Anwar' },
  { id: 'momo-station-cafe', name: 'The Himalayan Momo Station & Cafe', area: 'Rustampur', ownerName: 'Tenzing Norbu' },
  { id: 'pizza-slice-junction', name: 'Crust & Craft Woodfired Pizza', area: 'Bank Road', ownerName: 'Marco & Abhishek Pandey' },
  { id: 'dosa-plaza-south-kitchen', name: 'Madras Dosa Plaza & Udupi Corner', area: 'Shahpur', ownerName: 'K. Venkatesh' },
];

// 80 Names
const USER_NAMES = [
  'Aarav Mehta', 'Meera Joshi', 'Kabir Singh', 'Sana Khan', 'Rohan Verma',
  'Riya Gupta', 'Ananya Sharma', 'Vikramaditya Rao', 'Sneha Tiwari', 'Farhan Siddiqui',
  'Pooja Verma', 'Aditya Singh', 'Kavita Pandey', 'Kunal Kapoor', 'Deepali Mishra',
  'Arjun Nambiar', 'Shalini Sen', 'Varun Dhawan', 'Neha Agarwal', 'Alok Kashyap',
  'Divya Chauhan', 'Rahul Bajpai', 'Swati Saxena', 'Siddharth Roy', 'Tanvi Bhatia',
  'Mohit Rastogi', 'Priya Dubey', 'Mayank Shukla', 'Shreya Banerjee', 'Gaurav Tandon',
  'Ishita Singhal', 'Aman Keshari', 'Preeti Maurya', 'Saurabh Tripathi', 'Ritika Sengupta',
  'Deepak Pathak', 'Vandana Yadav', 'Nikhil Chawla', 'Sonam Jaiswal', 'Harshvardhan Jain',
  'Shruti Sethi', 'Pranav Madan', 'Smita Deshmukh', 'Akash Srivastava', 'Nikita Roy',
  'Yashwardhan Lal', 'Radhika Goel', 'Devendra Pratap', 'Sanya Malhotra', 'Tushar Khandelwal',
  'Simran Kaur', 'Rajat Mathur', 'Payal Singhania', 'Abhishek Dwivedi', 'Anupama Joshi',
  'Keshav Narang', 'Barkha Vats', 'Himanshu Pandey', 'Garima Dixit', 'Ujjwal Anand',
  'Jyoti Tiwari', 'Shlok Chaturvedi', 'Pallavi Chandra', 'Kartik Somani', 'Natasha Kulkarni',
  'Shailesh Upadhyay', 'Muskan Agrawal', 'Sameer Qureshi', 'Disha Parekh', 'Tarun Nayak',
  'Renu Bala', 'Ayush Goel', 'Shilpa Nair', 'Vipul Kaushik', 'Komal Rawat',
  'Parth Vasavada', 'Tina Grover', 'Naman Singhal', 'Latika Khurana', 'Manas Ranjan'
];

const AVATAR_PHOTOS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1534751516642-a1714f5a5a3a?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1485290334039-a3c69043e517?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1534751516642-a1714f5a5a3a?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80'
];

const FOOD_PHOTOS = [
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
];

// Specific review texts for each of the 20 restaurants (4 per restaurant = 80 reviews total)
const RESTAURANT_REVIEW_TEMPLATES = {
  'chaudhary-sweet-house': [
    {
      rating: 5,
      text: 'The pure desi ghee samosas here are legendary in Gorakhpur! Hot, crispy, and the potato filling is perfectly spiced with cashews. Also took home half a kilo of Kesar Rasmalai—pure bliss.',
      tags: ['Delicious Food', 'Authentic Flavours', 'Must Visit'],
      reply: 'Thank you for your heartfelt review! We take immense pride in preserving our heritage desi ghee recipes.'
    },
    {
      rating: 5,
      text: 'Visited with my family on Sunday morning for Chhole Bhature. Golden and puffed to perfection with tangy pindi chhole. Clean seating in the AC hall and fast service despite the rush.',
      tags: ['Family Friendly', 'Quick Service', 'Good Value'],
    },
    {
      rating: 4,
      text: 'Their Royal Veg Thali is huge and easily fills two light eaters. The dal makhani has that slow-cooked smoky richness. Parking on Cinema Road can be tricky on weekends, but the food is worth it.',
      tags: ['Good Value', 'Clean Place'],
      reply: 'Thanks for the review! For parking, our staff is always happy to guide cars towards the designated lot across the street.'
    },
    {
      rating: 5,
      text: 'Best Rabdi Jalebi in Eastern UP hands down. Served hot in a clay kulhad with thick malai rabdi. No trip to Golghar is complete without stopping here!',
      tags: ['Authentic Flavours', 'Delicious Food', 'Must Visit'],
    }
  ],
  'bobis-restaurant': [
    {
      rating: 5,
      text: 'The Galouti Kebabs melt on the tongue before you even chew! Served with warm ulte tawa ka paratha and mint chutney. Best Mughlai dinner experience in Civil Lines.',
      tags: ['Delicious Food', 'Great Ambience', 'Must Visit'],
      reply: 'We are thrilled you enjoyed our melt-in-mouth Galoutis! Looking forward to welcoming you back.'
    },
    {
      rating: 5,
      text: 'Tried their Mutton Rogan Josh and garlic naan. The gravy had the authentic Kashmiri fennel and saffron aroma with tender meat on bone. Excellent tandoor section.',
      tags: ['Authentic Flavours', 'Delicious Food'],
    },
    {
      rating: 4,
      text: 'The live barbeque grill at the table makes family dining so lively! Murgh Malai Tikka was juicy and creamy. Service took about 20 minutes because the house was packed on Saturday night.',
      tags: ['Great Ambience', 'Family Friendly'],
      reply: 'Thank you for dining with us! We have added dedicated weekend staff to ensure grilling and service are even faster.'
    },
    {
      rating: 5,
      text: 'Hands down the finest non-veg dining establishment in Gorakhpur. Spotless tables, royal cutlery, courteous waiters, and rich authentic taste.',
      tags: ['Clean Place', 'Friendly Staff', 'Great Ambience'],
    }
  ],
  'lakefront-lounge': [
    {
      rating: 5,
      text: 'Sitting on the deck with the evening Ramgarh Taal breeze while sipping a cold brew is magical. The woodfired pizza had great blistered crust and fresh mozzarella.',
      tags: ['Great Ambience', 'Must Visit', 'Delicious Food'],
      reply: 'Thank you! The sunset views over Ramgarh Taal paired with our artisan coffee are our favorite too.'
    },
    {
      rating: 5,
      text: 'Gorakhpur really needed a lakeview bistro like this. Loaded cheese nachos and the hazelnut frappe were top notch. Perfect spot for evening dates or college catch-ups.',
      tags: ['Great Ambience', 'Friendly Staff', 'Must Visit'],
    },
    {
      rating: 4,
      text: 'The lakeside location is 10/10. We loved the grilled peri-peri chicken platter and mocktails. Outdoor tables fill up fast by 6 PM, so arrive early.',
      tags: ['Great Ambience', 'Good Value'],
      reply: 'Pro-tip: We now take sunset table reservations via WhatsApp for outdoor deck seating!'
    },
    {
      rating: 5,
      text: 'Impeccable hygiene, fast Wi-Fi, and courteous staff. Worked remotely from here for 3 hours while enjoying pasta and cappuccino. A premier gem in Taramandal.',
      tags: ['Clean Place', 'Friendly Staff', 'Delicious Food'],
    }
  ],
  'shriram-sweets': [
    {
      rating: 5,
      text: 'The pure desi ghee Aloo Tikki chaat near Betiahata is unbeatable. Crispy golden patty drenched in sweet curd, saunth, and fresh pomegranate seeds. Pure bliss.',
      tags: ['Delicious Food', 'Authentic Flavours', 'Good Value'],
      reply: 'Dhanyawad! We have made our chaat in pure desi ghee for over three decades and love keeping it consistent.'
    },
    {
      rating: 5,
      text: 'Huge fan of their Raj Kachori! Bursting with sprouts, bhalla, and tangy chutneys. Their packaging for takeaway is very neat and leak-proof.',
      tags: ['Delicious Food', 'Quick Service', 'Good Value'],
    },
    {
      rating: 4,
      text: 'Brought their Kaju Katli and Motichoor Laddoos for Diwali gifting. Extremely fresh and fragrant with green cardamom. Highly recommended sweet shop in Betiahata.',
      tags: ['Authentic Flavours', 'Clean Place'],
    },
    {
      rating: 5,
      text: 'Clean counters, quick digital billing via QR, and very hygienic chaat counter. The papdi chaat and dahi bhalla are unmatched in the city.',
      tags: ['Clean Place', 'Quick Billing', 'Friendly Staff'],
      reply: 'Thank you for noticing our hygiene standards! We use only RO filtered water for all pani puri and curd preparations.'
    }
  ],
  'wokandroll-kitchen': [
    {
      rating: 5,
      text: 'Finally real Pan-Asian food in Gorakhpur! The Chilli Garlic Noodles had that authentic wok hei smokiness. Steamed chicken dim sums were juicy with thin wrappers.',
      tags: ['Delicious Food', 'Authentic Flavours', 'Must Visit'],
      reply: 'Xie xie! Our chefs take wok seasoning very seriously to deliver that authentic street-style wok hei.'
    },
    {
      rating: 5,
      text: 'Loved the Kung Pao Paneer with fried rice. Generous portion sizes and the red chilli dip has a serious kick. Modern neon vibes inside the cafe.',
      tags: ['Great Ambience', 'Good Value'],
    },
    {
      rating: 4,
      text: 'Great food on Medical College Road! Crispy honey chilli lotus stems were addictively crunchy. Quick takeaway delivery too.',
      tags: ['Quick Service', 'Delicious Food'],
    },
    {
      rating: 5,
      text: 'The best Asian restaurant in town. Super friendly staff who gave great recommendations for non-spicy options for our kids. Will definitely return.',
      tags: ['Friendly Staff', 'Family Friendly', 'Clean Place'],
      reply: 'Delighted to hear the little ones enjoyed their dinner! See you and your family again soon.'
    }
  ],
  'chai-stories-cafe': [
    {
      rating: 5,
      text: 'Such a cozy sanctuary in Betiahata. The adrak elaichi kulhad chai paired with cheese maggi on a rainy day is heavenly. Cozy bookshelves with good novels too.',
      tags: ['Great Ambience', 'Delicious Food', 'Must Visit'],
      reply: 'Thank you! Creating a warm reading nook for Gorakhpur bibliophiles and chai lovers was our dream.'
    },
    {
      rating: 5,
      text: 'Their Blueberry Cheesecake is legitimately one of the best I have tasted anywhere in UP. Smooth cream cheese texture with real berry compote.',
      tags: ['Delicious Food', 'Clean Place'],
    },
    {
      rating: 4,
      text: 'Charming warm interior, aesthetic photo spots for Instagram, and very polite servers. The peri peri french fries were super crisp and freshly fried.',
      tags: ['Great Ambience', 'Friendly Staff'],
    },
    {
      rating: 5,
      text: 'Had an afternoon meeting here. Silent corners, strong cold coffee, and quick billing. Truly an oasis for young professionals in Gorakhpur.',
      tags: ['Quick Billing', 'Clean Place', 'Friendly Staff'],
      reply: 'We are thrilled you had a productive work session! Feel free to ask our staff for power outlet tables anytime.'
    }
  ],
  'royal-awadh-darbar': [
    {
      rating: 5,
      text: 'An opulent royal feast right in Golghar! The Awadhi Dum Biryani has that delicate kewra and saffron fragrance where every grain of rice is separate and flavorful.',
      tags: ['Authentic Flavours', 'Delicious Food', 'Must Visit'],
      reply: 'Shukriya! Our Dum Biryani is cooked in sealed copper handis following age-old Lucknowi court traditions.'
    },
    {
      rating: 5,
      text: 'Ordered the Dal Makhani and Kakori Kebabs. The kebabs genuinely dissolved on the tongue. Grand chandelier decor and regal seating.',
      tags: ['Great Ambience', 'Delicious Food', 'Family Friendly'],
    },
    {
      rating: 4,
      text: 'Top tier fine dining for family celebrations. The mutton korma is rich and hearty. A bit crowded during festival evenings, so reserving a table is advised.',
      tags: ['Family Friendly', 'Authentic Flavours'],
      reply: 'Thank you! We always recommend booking ahead for large family gatherings during peak weekends.'
    },
    {
      rating: 5,
      text: 'Superb hospitality. The head steward explained the royal heritage behind each dish on the menu. Unmatched dining grandeur in Gorakhpur.',
      tags: ['Friendly Staff', 'Great Ambience', 'Clean Place'],
    }
  ],
  'brijwasi-sweets': [
    {
      rating: 5,
      text: 'The morning Bedmi Puri and spicy Hing aloo sabzi here is pure nostalgia! Freshly puffed crispy puris and authentic Mathura-style sour pumpkin subzi.',
      tags: ['Authentic Flavours', 'Delicious Food', 'Good Value'],
      reply: 'Radhe Radhe! We wake up at 5:00 AM every morning to grind fresh spices for our Hing aloo.'
    },
    {
      rating: 5,
      text: 'Cleanest pure veg thali restaurant on Bank Road. Served piping hot dal tadka, shahi paneer, and tandoori rotis with desi ghee. Extremely economical.',
      tags: ['Clean Place', 'Good Value', 'Quick Service'],
    },
    {
      rating: 4,
      text: 'Their Banarasi Malai Rabdi and Kaju Barfi are unmatched in quality. Pure milk products with no adulteration. High footfall during wedding season.',
      tags: ['Authentic Flavours', 'Delicious Food'],
    },
    {
      rating: 5,
      text: 'Whenever I visit the Bank Road commercial market, Brijwasi is my default lunch spot. Quick billing, contactless payments, and prompt parcel packing.',
      tags: ['Quick Billing', 'Clean Place', 'Good Value'],
      reply: 'Thank you for your frequent visits and loyal patronage!'
    }
  ],
  'burger-crust-hub': [
    {
      rating: 5,
      text: 'The Double Smash Buff & Cheese Burger here beats multinational burger chains hands down! Toasted brioche bun, caramelized onions, and house secret sauce.',
      tags: ['Delicious Food', 'Great Ambience', 'Must Visit'],
      reply: 'Thanks a lot! Our smash patties are pressed fresh to order on high heat to get that irresistible crust.'
    },
    {
      rating: 5,
      text: 'Peri-peri chicken wings were juicy and had an awesome crunch. Also tried the Lotus Biscoff thickshake—incredibly rich and thick.',
      tags: ['Delicious Food', 'Good Value'],
    },
    {
      rating: 4,
      text: 'Vibrant neon ambiance in Mohaddipur with hip hop tracks in the background. Young crowd, fast service, and generous fry portions.',
      tags: ['Great Ambience', 'Quick Service'],
    },
    {
      rating: 5,
      text: 'Ordered delivery twice on Zomato and dined in today. The dine-in experience is even better—burgers arrive steaming hot with melted cheddar dripping.',
      tags: ['Delicious Food', 'Clean Place', 'Friendly Staff'],
      reply: 'Nothing beats a hot burger fresh off the grill! Glad you came in person.'
    }
  ],
  'taalview-rooftop': [
    {
      rating: 5,
      text: 'The panoramic night view of Ramgarh Taal with the illuminated floating fountain and cool breeze is unmatched in all of Eastern UP. Great acoustic live music on Fridays!',
      tags: ['Great Ambience', 'Must Visit', 'Delicious Food'],
      reply: 'Thank you! The Ramgarh Taal fountain view is our pride. Our weekend acoustic sessions are on every Fri-Sun!'
    },
    {
      rating: 5,
      text: 'Tandoori Malai Chaap was tender and smoky. Paired it with their signature Virgin Blue Lagoon mocktail. Wonderful rooftop dining ambiance.',
      tags: ['Great Ambience', 'Delicious Food'],
    },
    {
      rating: 4,
      text: 'Celebrated my sister’s birthday on the terrace. The management arranged fairy lights and balloon decor on short notice. Food was flavorful and served hot.',
      tags: ['Family Friendly', 'Friendly Staff', 'Great Ambience'],
      reply: 'It was our pleasure hosting your sister’s special birthday evening!'
    },
    {
      rating: 5,
      text: 'Luxury dining experience without metropolitan price tags. Comfortable lounge sofa seating, attentive stewards, and hygienic washrooms.',
      tags: ['Clean Place', 'Friendly Staff', 'Good Value'],
    }
  ],
  'gagan-korma-corner': [
    {
      rating: 5,
      text: 'The Shahi Mutton Korma here is legendary in Shahpur! Thick, aromatic red gravy steeped in brown onions, mace, and cardamom. Meat falls right off the bone.',
      tags: ['Authentic Flavours', 'Delicious Food', 'Must Visit'],
      reply: 'Shukriya! Our korma recipe has remained unchanged since 1988, simmered in pure copper deghs.'
    },
    {
      rating: 5,
      text: 'Soft, steaming Khameeri rotis straight out of the clay oven. The chicken seekh kebabs are packed with green chillies, coriander, and minced ginger.',
      tags: ['Delicious Food', 'Good Value', 'Quick Service'],
    },
    {
      rating: 4,
      text: 'Pure paradise for non-veg lovers in Gorakhpur. The chicken biryani is mildly spiced and comes with rich salan. Gets very busy by 8:30 PM.',
      tags: ['Authentic Flavours', 'Good Value'],
    },
    {
      rating: 5,
      text: 'Speedy parcel counter and clean kitchen visibility. Prices are very reasonable for the quantity and authentic taste they serve.',
      tags: ['Quick Billing', 'Clean Place', 'Good Value'],
      reply: 'Thank you! We always aim to deliver royal flavors at neighborhood-friendly prices.'
    }
  ],
  'golgappa-junction': [
    {
      rating: 5,
      text: '6 distinct flavored panis! Hing, Pudina, Nimbu, Jeera, Khatta-Meetha, and Garlic. Every single flavor is made with mineral RO water and crispy puris.',
      tags: ['Delicious Food', 'Authentic Flavours', 'Must Visit'],
      reply: 'Thank you! We maintain 100% glove-wearing and RO water standards so you can enjoy street food without health worries.'
    },
    {
      rating: 5,
      text: 'The Dahi Papdi Chaat and Sev Puri here are so refreshing. Hygienic gloves, clean stainless steel counters, and prompt digital token system.',
      tags: ['Clean Place', 'Quick Billing', 'Good Value'],
    },
    {
      rating: 4,
      text: 'Always crowded at Asuran Chowk in the evenings, and for good reason! The Suji Golgappas are crunchy and don’t get soggy. Highly recommended street stop.',
      tags: ['Delicious Food', 'Good Value'],
    },
    {
      rating: 5,
      text: 'Most sanitary chaat center in Gorakhpur. No flies, clean bins, automated token counter, and delicious flavors. Worth every rupee.',
      tags: ['Clean Place', 'Quick Service', 'Friendly Staff'],
      reply: 'Dhanyawad! Clean street food is our mission.'
    }
  ],
  'the-yellow-chilli-gkp': [
    {
      rating: 5,
      text: 'Sanjeev Kapoor’s signature Lalla Mussa Dal is pure velvet. Cooked for 36 hours and you can taste that deep butter infusion. Top class fine dining on Park Road.',
      tags: ['Delicious Food', 'Must Visit', 'Great Ambience'],
      reply: 'Thank you! Chef Sanjeev Kapoor’s slow-simmered Lalla Mussa Dal is truly the heart of our menu.'
    },
    {
      rating: 5,
      text: 'Shaam Saunfiyana Paneer Tikka was sensational—the hint of roasted fennel seed gives it a distinct royal taste. Elegant family ambiance and valet parking.',
      tags: ['Great Ambience', 'Family Friendly', 'Clean Place'],
    },
    {
      rating: 4,
      text: 'Impressed by the Murgh Noormahal Biryani. Subtle spices, long grain aged basmati, and delicate mint notes. Perfect place for corporate dinners or anniversaries.',
      tags: ['Great Ambience', 'Delicious Food'],
      reply: 'Glad you enjoyed your celebration at The Yellow Chilli!'
    },
    {
      rating: 5,
      text: 'Five star hospitality in the center of Civil Lines. The staff is well groomed and courteous, cutlery is spotless, and Gulab-e-Gulkand dessert was divine.',
      tags: ['Clean Place', 'Friendly Staff', 'Delicious Food'],
    }
  ],
  'sagar-ratna-gorakhpur': [
    {
      rating: 5,
      text: 'The Mysore Masala Dosa is crisp with that fiery red garlic chutney smeared inside and steaming drumstick sambar. Authentic South Indian flavors in Gorakhpur!',
      tags: ['Authentic Flavours', 'Delicious Food', 'Clean Place'],
      reply: 'Vanakkam! Our chefs and batter fermenting techniques come directly from coastal Karnataka.'
    },
    {
      rating: 5,
      text: 'Steamed Idli and Medu Vada combo was so fresh at 8:30 in the morning. Followed by a piping hot tumbler of chicory Filter Coffee. Pure comfort food.',
      tags: ['Delicious Food', 'Quick Service', 'Good Value'],
    },
    {
      rating: 4,
      text: 'Consistently high quality pure veg dining in Golghar. Clean air conditioned hall, fast table clearing, and child-friendly high chairs available.',
      tags: ['Clean Place', 'Family Friendly', 'Quick Billing'],
    },
    {
      rating: 5,
      text: 'Their Pineapple Rava Kesari is laden with desi ghee and golden roasted cashews. Best spot for pure vegetarian breakfast and lunch in the city.',
      tags: ['Delicious Food', 'Clean Place', 'Must Visit'],
      reply: 'Thank you for your warm words! The ghee aroma in our Kesari is pure tradition.'
    }
  ],
  'punjabi-dhaba-express': [
    {
      rating: 5,
      text: 'Makki di Roti and authentic Sarson da Saag served with white butter and jaggery! Tasted straight out of a highway dhaba in Punjab. Massive portions.',
      tags: ['Authentic Flavours', 'Delicious Food', 'Must Visit'],
      reply: 'Balle Balle! We source our mustard greens and churn our own white makhan for that true pind experience.'
    },
    {
      rating: 5,
      text: 'Butter Chicken Handi with garlic naan here is rich, creamy, and mildly sweet. Followed by a giant steel glass of Patiala sweet lassi with thick malai.',
      tags: ['Delicious Food', 'Good Value', 'Family Friendly'],
    },
    {
      rating: 4,
      text: 'Rustic Punjabi village theme with tractor wheels, charpai seating, and lively bhangra beats in Mohaddipur. Loved the Amritsari Kulcha platter.',
      tags: ['Great Ambience', 'Good Value'],
    },
    {
      rating: 5,
      text: 'Fast food delivery and generous portions. The Dal Tadka has that pure dhaba smokiness with whole red chillies and cumin tadka. Very satisfying meal.',
      tags: ['Quick Service', 'Delicious Food', 'Friendly Staff'],
      reply: 'Thank you ji! Keep visiting Pind Balluchi with family!'
    }
  ],
  'belgian-waffle-desserts': [
    {
      rating: 5,
      text: 'Freshly baked warm waffle with melted Belgian dark chocolate and roasted hazelnuts! Golden crispy on the outside and airy inside. Best dessert parlor in Betiahata.',
      tags: ['Delicious Food', 'Must Visit', 'Great Ambience'],
      reply: 'Merci! We prepare our authentic yeast-risen Belgian waffle batter fresh every single morning.'
    },
    {
      rating: 5,
      text: 'Red Velvet Waffle Cake with white chocolate cream cheese spread was a showstopper. Took my friends here after college exams and we loved it.',
      tags: ['Delicious Food', 'Clean Place', 'Good Value'],
    },
    {
      rating: 4,
      text: 'Great dessert hangout! The waffles are served in easy-to-hold takeaway sleeves so you can walk around Betiahata while munching. Clean open kitchen.',
      tags: ['Clean Place', 'Quick Service'],
    },
    {
      rating: 5,
      text: 'Triple Chocolate Overload Waffle is pure decadence. Courteous staff, fast preparation, and heavenly chocolate aroma the moment you step in.',
      tags: ['Friendly Staff', 'Delicious Food', 'Quick Billing'],
      reply: 'Thank you! Chocolate lovers will always find a sweet home here.'
    }
  ],
  'nawabi-zaika-biryani': [
    {
      rating: 5,
      text: 'The best dum biryani on Medical College Road! Fragrant long grains of basmati, perfectly tender marinated chicken pieces, and caramelized onions on top.',
      tags: ['Authentic Flavours', 'Delicious Food', 'Must Visit'],
      reply: 'Shukriya! We slow cook our biryani on burning charcoal embers for that quintessential dum aroma.'
    },
    {
      rating: 5,
      text: 'Chicken Malai Tikka rolls in soft roomali roti are so juicy and packed with flavor. Extremely budget friendly for medical students and local residents.',
      tags: ['Good Value', 'Delicious Food', 'Quick Service'],
    },
    {
      rating: 4,
      text: 'Rich Mughlai flavors with very quick turnaround time. Finished our meal with their clay pot Shahi Firni—delightfully chilled and creamy.',
      tags: ['Quick Service', 'Delicious Food'],
    },
    {
      rating: 5,
      text: 'Clean seating area with AC, prompt service, and courteous counter staff. Quality and hygiene have stayed top-notch since day one.',
      tags: ['Clean Place', 'Friendly Staff', 'Good Value'],
      reply: 'Thank you for your appreciation! We strive to maintain supreme hygiene in all our preparations.'
    }
  ],
  'momo-station-cafe': [
    {
      rating: 5,
      text: 'Authentic Darjeeling style thin-skin momos! The chicken steamed momos are bursting with clear soup and accompanied by that fiercely spicy roasted red tomato chutney.',
      tags: ['Authentic Flavours', 'Delicious Food', 'Must Visit'],
      reply: 'Tashi delek! Our spicy dhangro red chutney is made with real Himalayan Dalle Khursani chillies.'
    },
    {
      rating: 5,
      text: 'Crispy Kurkure Momos and warm Thukpa noodle soup on a cold evening in Rustampur is unmatched. Generous fillings and very affordable rates.',
      tags: ['Good Value', 'Delicious Food', 'Great Ambience'],
    },
    {
      rating: 4,
      text: 'Favorite evening snacks joint for college students. Steamed paneer cheese momos are soft and flavorful. Clean open preparation counter.',
      tags: ['Clean Place', 'Quick Service', 'Good Value'],
    },
    {
      rating: 5,
      text: 'Super energetic and welcoming Tibetan staff. Quick billing with UPI QR code and neat biodegradable plates. 5 stars for authentic taste!',
      tags: ['Friendly Staff', 'Quick Billing', 'Clean Place'],
      reply: 'Thank you so much! Eco-friendly dining and authentic Himalayan flavors are our commitment.'
    }
  ],
  'pizza-slice-junction': [
    {
      rating: 5,
      text: 'Finally real Neapolitan woodfired pizza in Gorakhpur! That sourdough blistered crust with genuine San Marzano tomato sauce and fresh basil is a revelation on Bank Road.',
      tags: ['Delicious Food', 'Authentic Flavours', 'Must Visit'],
      reply: 'Grazie! Our wood-fired oven runs at 450°C to give that signature leopard-spotted crust in 90 seconds.'
    },
    {
      rating: 5,
      text: 'Truffle Mushroom Pizza and the Cheesy Garlic Pull-Apart Bread were incredible. Warm Italian rustic bistro vibe with warm amber lighting.',
      tags: ['Great Ambience', 'Delicious Food', 'Clean Place'],
    },
    {
      rating: 4,
      text: 'The four-cheese Quattro Formaggi pizza was loaded with mozzarella, cheddar, and gouda. Fast baking time and very friendly pizza chefs.',
      tags: ['Delicious Food', 'Friendly Staff'],
    },
    {
      rating: 5,
      text: 'Superior quality ingredients. You can taste the real olive oil and fresh herbs. The chocolate lava cake for dessert topped off an unforgettable meal.',
      tags: ['Clean Place', 'Must Visit', 'Delicious Food'],
      reply: 'Delighted to hear you had a great Italian feast with us! See you again soon.'
    }
  ],
  'dosa-plaza-south-kitchen': [
    {
      rating: 5,
      text: 'The Ghee Podi Roast Dosa is golden, crispy, and drenched in fragrant spiced gun powder and pure cow ghee. Served with 3 coconut chutneys and hot sambar.',
      tags: ['Authentic Flavours', 'Delicious Food', 'Must Visit'],
      reply: 'Thank you! Our Podi spice blend is ground in-house with roasted lentils and curry leaves.'
    },
    {
      rating: 5,
      text: 'Over 100 varieties of dosas! Tried their Spring Roll Dosa and Paneer Butter Masala Dosa in Shahpur. Fun fusion concept and very filling.',
      tags: ['Delicious Food', 'Good Value', 'Family Friendly'],
    },
    {
      rating: 4,
      text: 'Crispy Medu Vadas that are golden on the outside and fluffy inside. Clean family seating with quick service and very economical prices.',
      tags: ['Clean Place', 'Quick Service', 'Good Value'],
    },
    {
      rating: 5,
      text: 'Immaculately clean South Indian restaurant. Filter coffee served in traditional brass dabara is aromatic and frothy. Highest recommendations for Shahpur foodies!',
      tags: ['Clean Place', 'Friendly Staff', 'Must Visit'],
      reply: 'Vanakkam! Thank you for making us your favorite South Indian dining destination in Shahpur.'
    }
  ]
};

// 1. Generate 80 Users
const users = USER_NAMES.map((name, i) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '.');
  const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];
  const domain = domains[i % domains.length];
  const email = `${slug}${10 + (i % 89)}@${domain}`;
  const avatarUrl = AVATAR_PHOTOS[i % AVATAR_PHOTOS.length];
  const month = String(1 + (i % 12)).padStart(2, '0');
  const day = String(1 + (i % 28)).padStart(2, '0');
  const createdAt = `2025-${month}-${day}`;
  
  return {
    id: `usr-${i + 1}`,
    name,
    email,
    avatarUrl,
    reviewsCount: 1 + Math.floor((80 - i) / 4) + (i % 5),
    isBanned: i === 65, // Exactly 1 banned user for testing admin moderation
    createdAt,
  };
});

// 2. Generate 80 Reviews (4 for each of the 20 restaurants)
const reviews = [];
let reviewIndex = 0;

for (let rIdx = 0; rIdx < RESTAURANTS.length; rIdx++) {
  const rest = RESTAURANTS[rIdx];
  const templates = RESTAURANT_REVIEW_TEMPLATES[rest.id] || [];

  for (let tIdx = 0; tIdx < 4; tIdx++) {
    const tmpl = templates[tIdx] || {
      rating: 5,
      text: `Outstanding dining experience at ${rest.name}! Fresh food, courteous hospitality, and great taste in ${rest.area}.`,
      tags: ['Delicious Food', 'Clean Place'],
    };

    const user = users[reviewIndex];
    const foodPhoto = FOOD_PHOTOS[reviewIndex % FOOD_PHOTOS.length];
    
    // Dates from Aug 2026 to Nov 2026
    const months = ['08', '09', '10', '11'];
    const month = months[(reviewIndex + rIdx) % months.length];
    const day = String(1 + ((reviewIndex * 7) % 28)).padStart(2, '0');
    const date = `2026-${month}-${day}`;

    const reviewObj = {
      id: `rev-${reviewIndex + 1}`,
      restaurantId: rest.id,
      restaurantName: rest.name,
      userName: user.name,
      userEmail: user.email,
      userAvatar: user.avatarUrl,
      rating: tmpl.rating,
      text: tmpl.text,
      tags: tmpl.tags,
      photoUrl: foodPhoto,
      date,
      isDemo: false,
      isFlagged: false,
      ownerReply: tmpl.reply
        ? {
            text: tmpl.reply,
            date: `2026-${month}-${String(Math.min(28, Number(day) + 1)).padStart(2, '0')}`,
          }
        : undefined,
    };

    reviews.push(reviewObj);
    reviewIndex++;
  }
}

// Write src/data/gorakhpurUsers.ts
const usersTsContent = `import type { UserProfile } from '@/types/restaurant';

/**
 * 80 Simulated verified customer profiles for Gorakhpur Food Guide.
 * Complete with authentic names, verified emails, Unsplash high-res portraits,
 * review activity counts, and account registration dates.
 */
export const GORAKHPUR_USERS: readonly UserProfile[] = ${JSON.stringify(users, null, 2)};
`;

fs.writeFileSync(path.resolve(process.cwd(), 'src/data/gorakhpurUsers.ts'), usersTsContent, 'utf8');
console.log(`Generated src/data/gorakhpurUsers.ts with ${users.length} users!`);

// Write src/data/gorakhpurReviews.ts
const reviewsTsContent = `import type { Review } from '@/types/restaurant';

/**
 * 80 Authentic customer dining reviews distributed evenly across all 20 Gorakhpur restaurants.
 * Complete with star ratings, detailed reviews, tags, verified Unsplash food photos,
 * user avatars, timestamps, and restaurant owner replies.
 */
export const GORAKHPUR_REVIEWS: readonly Review[] = ${JSON.stringify(reviews, null, 2)};
`;

fs.writeFileSync(path.resolve(process.cwd(), 'src/data/gorakhpurReviews.ts'), reviewsTsContent, 'utf8');
console.log(`Generated src/data/gorakhpurReviews.ts with ${reviews.length} reviews!`);
