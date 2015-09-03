1. Get profile JSON for username from treehouse from username route or submitted username form
----> getProfileJSON.js
2. Check DB to see if color information has already been calculated for an image
----> checkDbForColor.js
  // if it hasn't, get dominant color of badge and store in DB
3. Sort array of badge image objects by dominant color
----> sortImageArr.js
4. Append badge image divs to DOM
----> appendBadges.js


Getting Dominant Color
----------------------
1. Download image from URL to temporary directory
----> downloadFile.js
2. Create disembodied DOM element from local image file
----> thieveColor.js
3. Use color-thief to calculate dominant color
----> thieveColor.js
4. Save badge info object to DB
----> saveColorToDb.js


{
  'imageUrl': 'https://achievement-images.teamtreehouse.com/Generic_Newbie.png',
  'color': {
    'h': 53,
    's': 96,
    'l': 58
  }
}
