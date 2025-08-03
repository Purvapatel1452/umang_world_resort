const fs = require('fs');
const path = require('path');

// Create folder structure for media files
const createFolders = () => {
  const folders = [
    'public/images',
    'public/images/hero',
    'public/images/activities',
    'public/images/rooms',
    'public/images/dining',
    'public/images/gallery',
    'public/images/about',
    'public/videos',
    'public/videos/hero',
    'public/videos/activities'
  ];

  folders.forEach(folder => {
    const fullPath = path.join(__dirname, folder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✅ Created folder: ${folder}`);
    } else {
      console.log(`📁 Folder already exists: ${folder}`);
    }
  });

  console.log('\n🎉 Media folders setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Add your resort images to the appropriate folders');
  console.log('2. Add your hero video to public/videos/resort-hero.mp4');
  console.log('3. Update image paths in the code if needed');
  console.log('4. Test the website to ensure all images load correctly');
};

// Run the setup
createFolders(); 