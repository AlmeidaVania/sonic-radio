// ================================
// ELEMENTOS
// ================================
const playerColumn =
  document.querySelector(".player-column");

const radioLayout =
  document.querySelector(".radio-layout");
const audio = document.getElementById("audioPlayer");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const infoBox =
  document.querySelector(".info-box");

const infoHeader =
  document.getElementById("infoHeader");

const infoText =
  document.getElementById("infoText");

const cover = document.getElementById("cover");
const screenshotLayer =
  document.createElement("img");

screenshotLayer.className =
  "screenshot-layer";

document
  .querySelector(".player")
  .appendChild(screenshotLayer);

const screenshotMap = {
  //Sonic 1//
  "Sonic the Hedgehog (1991)|Green Hill Zone": {
    folder: "sonic1/greenhill",
    prefix: "greenhill",
    total: 8
  },
  "Sonic the Hedgehog (1991)|Green Hill Zone (Olympic Mix)": {
    folder: "sonic1/greenhill",
    prefix: "greenhill",
    total: 8
  },
  //Sonic 2//
  //Sonic 3 & Knuckles//
  "Sonic 3 & Knuckles|Angel Island Zone Act 1": {
    folder: "sonic3/angelisland1",
    prefix: "angelisland",
    total: 4
  },
  "Sonic 3 & Knuckles|Hydrocity Zone Act 1": {
    folder: "sonic3/hydrocity1",
    prefix: "hydrocity",
    total: 4
  }
};

const triviaMap = {
  //SONIC 1//
  "Sonic the Hedgehog (1991)|Green Hill Zone": `
    Masato Nakamura approached the
    <br>
    original project as if scoring
    <br>
    for a film!
    <br>
    <br>
    Drawing inspiration from soundtracks
    <br>
    of late 1980s films like Top Gun,
    <br>
    Flashdance and Dirty Dancing!
  `,
  "Sonic the Hedgehog (1991)|Marble Zone": `
  Originally, Marble Zone had UFOs
  <br>
  casually floating in the sky, but
  <br>
  were ultimately dropped in the final
  <br>
  game.
  <br>
  <br>
  However, accessing the Debug Mode in
  <br>
  the 2013 / Origins remaster allows
  <br>
  them to be reactivated!

  <div class="marble-ufos">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
  </div>
`,
  "Sonic the Hedgehog (2013)|Marble Zone (Remastered)": `
    Originally, Marble Zone had UFOs
    <br>
    casually floating in the sky, but
    <br>
    were ultimately dropped in the final
    <br>
    game.
    <br>
    <br>
    However, accessing the Debug Mode in
    <br>
    the 2013 / Origins remaster allows
    <br>
    them to be reactivated!

  <div class="marble-ufos">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
  </div>
  `,
  "Sonic the Hedgehog (1991)|Spring Yard Zone": `
    The zone was originally called
    <br>
    Sparkling Zone!
    <br>
    <br>
    Rather than an urban city with
    <br>
    mountains in the back, it was
    <br>
    supposed to be luminous Las Vegas
    <br>
    like casino with neon signs and
    <br>
    a star-lit sky!
    <br>
    <br>
    Including an unused sign that read
    <br>
    "Let's Go" in cursive, never to be
    <br>
    properly implemented.

    <div class="springyard-letsgo">
      <img src="assets/background/springyard-letsgo.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Labyrinth Zone": `
    The zone was originally supposed
    <br>
    to have an unique item: Goggles!
    <br>
    <br>
    So, rather than catching bubbles
    <br>
    to survive the mortal labyrinth
    <br>
    Sonic would breath underwater
    <br>
    with one of these!
    <br>
    <br>
    The item is available inside the
    <br>
    Debug Mode of 2013 version as well
    <br>
    and acts like a Shield with a special
    <br>
    property.

    <div class="goggles-sonic">
      <img src="assets/background/goggles-sonic.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Star Light Zone": `
    This is the only Zone in Sonic 1
    <br>
    to feature elements not only in
    <br>
    the background, but also at the
    <br>
    foreground!

    <div class="starlight-tile">
      <img src="assets/background/starlight-tile.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Scrap Brain Zone": `
    The Act 2 of this Zone contains
    <br>
    a secret path only accessible if
    <br>
    the player collects & manages to
    <br>
    keep 50 rings!
    <br>
    <br>
    Said secret path is located at a
    <br>
    very specific Warp Tube! Look out!

    <div class="scrapbrain-teleporter">
      <img src="assets/background/scrapbrain-teleporter.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Special Stage": `
    These stages were mechanically
    <br>
    inspired by the game Cameltry on
    <br>
    the NES!
    <br>
    <br>
    Though, unlike Cameltry you don't
    <br>
    rotate the stage, but rather have
    <br>
    full control of Sonic!

    <div class="specialstage-items">
      <img src="assets/background/specialstage-items.gif">
    </div>
  `,

  //SONIC 2//
  "Sonic the Hedgehog 2|Emerald Hill Zone": `
    Emerald Hill's name is actually
    <br>
    taken from a neighborhood south
    <br>
    of San Francisco which is called
    <br>
    Emerald Hills!
    <br>
    <br>
    Upon noticing the name during a
    <br>
    location test, the team decided
    <br>
    to use it in the final game.
  `,
  "Sonic the Hedgehog 2|Chemical Plant Zone": `
    There is actually a way to avoid
    <br>
    the infamous underwater sequence
    <br>
    in this Zone's Act 2!
    <br>
    <br>
    All the player has to do is keep
    <br>
    an eye out once they're launched
    <br>
    upwards midway through the level.
    <br>
    <br>
    After passing by the moving blocks
    <br>
    instead of rolling right into the
    <br>
    Dash Pad, the player must either
    <br>
    jump over it or brake once triggering
    <br>
    it.
    <br>
    <br>
    Then go left and they'll find a well
    <br>
    hidden passage all the way to the boss!
    <div class="bubble-timer">
      <img src="assets/background/bubble-timer.gif">
    </div>
  `,
  "Sonic the Hedgehog 2|Aquatic Ruin Zone": `
    In the Simon Wai Prototype, this
    <br>
    Zone had an entire different name:
    <br>
    Neo Green Hill Zone!
    <br>
    <br>
    A name later used to designate
    <br>
    Sonic Advance's first Zone!
    <br>
    <br>
    Coincidentally this Zone was also
    <br>
    the very first in the Simon Wai
    <br>
    Prototype!
  `,
  "Sonic the Hedgehog 2|Casino Night Zone": `
    Early in development, this Zone
    <br>
    actually had a completely different
    <br>
    color palette!
    <br>
    <br>
    A palette more focused on pinks and
    <br>
    sky blues and card symbols rather
    <br>
    than the usual casino-theming.

    <div class="casino-tile">
      <img src="assets/background/casino-tile.gif">
    </div>
  `,
  "Sonic the Hedgehog 2|Hill Top Zone": `
    Originally in development, when the
    <br>
    game still took into account a time
    <br>
    travel mechanic, Hill Top Zone was
    <br>
    supposed to be a past version of
    <br>
    Emerald Hill Zone!
    <br>
    <br>
    Noticeable in the final game by
    <br>
    the proximity of their tileset.

    <div class="emeraldhilltop-tileset">
      <img src="assets/background/emeraldhilltop-tileset.gif">
    </div>
  `,
  "Sonic the Hedgehog 2|Mystic Cave Zone": `
    This Zone's Act 2 has one of the
    <br>
    most infamous places in gaming:
    <br>
    an inescapable pit of spikes!
    <br>
    <br>
    At least, that was the case in the
    <br>
    original 1992 version of the game.
    <br>
    <br>
    Since then, in the 2013 version,
    <br>
    the pit has been replaced with a
    <br>
    secret entrance to the mysterious
    <br>
    Hidden Palace Zone!

    <div class="mysticcave-pit">
      <img src="assets/background/mysticcave-pit.png">
    </div>
  `,
  "Sonic the Hedgehog 2|Hidden Palace Zone": `
    While this Zone is exclusive to
    <br>
    the 2013 / Origins re-release of
    <br>
    Sonic 1, the music used here comes
    <br>
    from the 2P version of Mystic Cave!
    <br>
    <br>
    Which was also the theme that played
    <br>
    in this Zone in the Simon Wai Prototype!

    <div class="hiddenpalace-organ">
      <img src="assets/background/hiddenpalace-organ.png">
    </div>
  `,
  "Sonic the Hedgehog 2|Oil Ocean Zone": `
    In the original version of Sonic 2
    <br>
    entering a specific cheat code in
    <br>
    the hidden Sound Test grants the player
    <br>
    whopping 14 continues!
    <br>
    <br>
    However, it also causes this Zone's theme
    <br>
    to play throughout the entire game!
  `,
  "Sonic the Hedgehog 2|Metropolis Zone": `
    This is the only Zone in the final
    <br>
    game to have three Acts instead of
    <br>
    the standard two!
    <br>
    <br>
    This is because the original
    <br>
    Genocide City Zone was scrapped,
    <br>
    and its layout was reused for this
    <br>
    Zone's Act 3!
  `,
  "Sonic the Hedgehog 2|Wing Fortress Zone": `
    This Zone featured the first use of
    <br>
    the name 'Eggman' in western Sonic
    <br>
    media, written on the side of the
    <br>
    flying fortress!
    <br>
    <br>
    Until then, the character was known
    <br>
    as Robotnik until Sonic Adventure
    <br>
    merged both names.
    <br>
    <br>
    Dr. Ivo Robotnik, also known as
    <br>
    Dr. Eggman.

    <div class="eggman-fortress">
      <img src="assets/background/eggman-fortress.png">
    </div>
  `,
  "Sonic the Hedgehog 2|Special Stage": `
    The player can actually achieve
    <br>
    Super Sonic very early on, in
    <br>
    Emerald Hill!
    <br>
    <br>
    That is, if they find all the
    <br>
    checkpoints spread across the
    <br>
    level and don't lose their 50
    <br>
    rings or fail Special Stage!

    <div class="halfpipe-sonic">
      <img src="assets/background/halfpipe-sonic.gif">
    </div>
  `,
  "Sonic the Hedgehog 2|Death Egg Zone": `
    During the fight against
    <br>
    Mecha Sonic, Eggman is visible
    <br>
    through a window, observing the
    <br>
    battle.
    <br>
    <br>
    He was supposed to have a
    <br>
    laughing animation whenever
    <br>
    Sonic got hit!
    <br>
    <br>
    However, because this Zone
    <br>
    contains no rings at all,
    <br>
    the animation never plays!

    <div class="eggman-laughing">
      <img src="assets/background/eggman-laughing.gif">
    </div>
  `,


  //SONIC 3//
  "Sonic 3 & Knuckles|Angel Island Zone Act 1": `
    In the original version of
    <br>
    Sonic 3, there is a glitch in
    <br>
    this Act that causes the
    <br>
    music to switch to the Act 2
    <br>
    version after completing a
    <br>
    Special Stage or Bonus Stage.
    <br>
    <br>
    However, it only occurs when
    <br>
    the Zone is set ablaze.
    <br>
    <br>
    This was later partially fixed in
    <br>
    Sonic 3 & Knuckles, where the
    <br>
    glitch would only occur after
    <br>
    completing a Special Stage.
    <br>
    <br>
    It was finally, fully fixed in
    <br>
    Sonic Origins!
  `,

  "Escape from the City": `
    City Escape was inspired by San
    Francisco and features one of
    Sonic's most iconic levels.
  `

};

const lyricsMap = {
  "Sonic CD (JP)|Sonic - You Can Do Anything": [
    {
      time: 11,
      text: "10, 10: Here we go again!"
    },
    {
      time: 12,
      text: "9, 9: Don't fall behind!"
    },
    {
      time: 14,
      text: "8, 8: Say, don't be late!"
    },
    {
      time: 15.5,
      text: "7, 7: Destination heaven!"
    },
    {
      time: 17,
      text: "6, 5: Stay alive!"
    },
    {
      time: 19,
      text: "4, 3: Now it's you and me!"
    },
    {
      time: 20,
      text: "2, 1: We're gonna have fun"
    },
    {
      time: 21.8,
      text: "Say, blast off! Hey!"
    },
    {
      time: 23.7,
      text: "Excalibur. It's not that far"
    },
    {
      time: 25,
      text: "What do you make? Give and take"
    },
    {
      time: 26.7,
      text: "Going home. Time Zone"
    },
    {
      time: 28.2,
      text: "Check out Egg. He's never alone"
    },
    {
      time: 29.5,
      text: "Leather & Lace. Gettin' in place"
    },
    {
      time: 31,
      text: "What do you get? — Say, fast jet!"
    },
    {
      time: 32.8,
      text: "Doom Room — Cosmic Zoom"
    },
    {
      time: 34,
      text: "Heads up, Jake — It's Sonic Boom!"
    },
    {
      time: 36.2,
      text: "Toot-Toot Sonic Warrior (x2)"
    },
    {
      time: 39,
      text: "Your hour is near at hand"
    },
    {
      time: 41,
      text: "You've got the power to save the land"
    },
    {
      time: 44.8,
      text: "Take a little chance — Slip on through"
    },
    {
      time: 46,
      text: "You gotta survive no matter what you do"
    },
    {
      time: 47.5,
      text: "You gotta do for you"
    },
    {
      time: 48.1,
      text: "Toot-Toot Sonic Warrior (x2)"
    },
    {
      time: 51.2,
      text: "The power is in your mind"
    },
    {
      time: 53.5,
      text: "To save the planet and conquer time!"
    },
    {
      time: 61,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 62.2,
      text: "deep in space and time"
    },
    {
      time: 64.2,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 65.5,
      text: "forever in your mind"
    },
    {
      time: 67.2,
      text: "Nothing can survive the will to stay alive"
    },
    {
      time: 70,
      text: "'Cause if you try, you can do anything!"
    },
    {
      time: 73.8,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 75.2,
      text: "always takes a chance"
    },
    {
      time: 76.8,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 78.5,
      text: "never says 'he can't!'"
    },
    {
      time: 80,
      text: "Nothing can survive the will to stay alive"
    },
    {
      time: 82.5,
      text: "'Cause if you try, you can do anything!"
    },
  ],
  "Sonic CD (JP)|Cosmic Eternity - Believe in Yourself": [
    {
      time: 48,
      text: "Waah! Teleportation, yeah!"
    },
    {
      time: 50,
      text: "Waah! Za-ba-doo-bap-bap!"
    },
    {
      time: 54.8,
      text: "Waah! Teleportation, yeah!"
    },
    {
      time: 57,
      text: "Waah! Shibby-doo-boo, yeah!"
    },
    {
      time: 65,
      text: "In the end, who's on your side?"
    },
    {
      time: 66.3,
      text: "Who can you trust"
    },
    {
      time: 67,
      text: "in the middle of the night?"
    },
    {
      time: 68,
      text: "Where will you be"
    },
    {
      time: 69,
      text: "if they can't find you?"
    },
    {
      time: 70,
      text: "There's no place to go, nothing to do"
    },
    {
      time: 72,
      text: "If you gotta do something"
    },
    {
      time: 72.8,
      text: "if you gotta do something"
    },
    {
      time: 74,
      text: "Believe in yourself, yourself, yourself!"
    },
    {
      time: 77,
      text: "Hey!"
    },
    {
      time: 79.8,
      text: "Extraordinary things can happen"
    },
    {
      time: 82.5,
      text: "If you believe in yourself"
    },
    {
      time: 86.8,
      text: "You've got to have some faith in yourself"
    },
    {
      time: 89.8,
      text: "If you want respect from your friends"
    },
    {
      time: 93.5,
      text: "Don't rearrange; no need to change"
    },
    {
      time: 95,
      text: "Stay like you are; keep it all the same"
    },
    {
      time: 96.8,
      text: "But as you move along in your life"
    },
    {
      time: 98.9,
      text: "Keep an open mind, and don't forget"
    },
    {
      time: 100,
      text: "That if you gotta do something"
    },
    {
      time: 101.8,
      text: "if gotta do something"
    },
    {
      time: 103,
      text: "Believe in yourself, yourself, yourself!"
    },
    {
      time: 106,
      text: "Hey!"
    },
    {
      time: 108,
      text: "Extraordinary things can happen"
    },
    {
      time: 110.9,
      text: "If you believe in yourself"
    },
    {
      time: 115,
      text: "You've got to have some faith in yourself"
    },
    {
      time: 118,
      text: "If you want respect from your friends"
    },
    {
      time: 122,
      text: "When you feel tight"
    },
    {
      time: 123.8,
      text: "Look at yourself!"
    },
    {
      time: 125,
      text: "Inside your heart, you will find"
    },
    {
      time: 126,
      text: "A special place to unwind"
    },
    {
      time: 129,
      text: "When you feel fright"
    },
    {
      time: 131,
      text: "Look at yourself!"
    },
    {
      time: 132,
      text: "Inside your mind, you will see"
    },
    {
      time: 133.9,
      text: "Cosmic eternity"
    },
    {
      time: 162,
      text: "When you feel tight"
    },
    {
      time: 163.5,
      text: "Look at yourself!"
    },
    {
      time: 165,
      text: "Inside your heart, you will find"
    },
    {
      time: 166,
      text: "A special place to unwind"
    },
    {
      time: 169,
      text: "When you feel fright"
    },
    {
      time: 170.5,
      text: "Look at yourself!"
    },
    {
      time: 171.8,
      text: "Inside your mind, you will see"
    },
    {
      time: 173,
      text: "Cosmic eternity"
    },
  ],
  "Sonic CD (US)|Sonic Boom (Intro)": [
    {
      time: 13.8,
      text: "If you're strong"
    },
    {
      time: 15,
      text: "You can fly"
    },
    {
      time: 16.5,
      text: "You can reach the other side"
    },
    {
      time: 19,
      text: "Of the rainbow"
    },
    {
      time: 23.9,
      text: "It's all right"
    },
    {
      time: 25,
      text: "Take a chance"
    },
    {
      time: 26.5,
      text: "Cause there is no circumstance"
    },
    {
      time: 28.9,
      text: "That you can't handle"
    },
    {
      time: 32,
      text: "When you use your mind"
    },
    {
      time: 34,
      text: "Sonic Boom (3x)"
    },
    {
      time: 37.2,
      text: "(Trouble keeps you running faster)"
    },
    {
      time: 39,
      text: "Sonic Boom (3x)"
    },
    {
      time: 42.1,
      text: "(Save the planet from disaster)"
    },
    {
      time: 54.8,
      text: "Through the dark"
    },
    {
      time: 56,
      text: "To the light"
    },
    {
      time: 57.5,
      text: "It's a supersonic flight"
    },
    {
      time: 59.6,
      text: "Gotta keep it goin'"
    },
    {
      time: 65,
      text: "Sonic Boom (3x)"
    },
    {
      time: 68.3,
      text: "(Trouble keeps you running faster)"
    },
    {
      time: 70.5,
      text: "Sonic Boom (3x)"
    },
    {
      time: 73.2,
      text: "(Save the planet from disaster)"
    },
    {
      time: 75,
      text: "Sonic Boom (3x)"
    },
    {
      time: 78,
      text: "(Spinning through a world in motion)"
    },
    {
      time: 80,
      text: "Sonic Boom (3x)"
    },
    {
      time: 158,
      text: "Sonic Boom (3x)"
    },
    {
      time: 161.2,
      text: "(Trouble keeps you running faster)"
    },
    {
      time: 163.8,
      text: "Sonic Boom (3x)"
    },
    {
      time: 166.2,
      text: "(Save the planet from disaster)"
    },
    {
      time: 168,
      text: "Sonic Boom (3x)"
    },
    {
      time: 171.2,
      text: "(Spinning through a world in motion)"
    },
    {
      time: 173,
      text: "Sonic Boom (3x)"
    },
  ],
  "Sonic CD (US)|Sonic Boom (Ending)": [
    {
      time: 17.9,
      text: "If you're strong, you can fly"
    },
    {
      time: 19.9,
      text: "You can reach the other side of the rainbow"
    },
    {
      time: 26.3,
      text: "It's all right, take a chance"
    },
    {
      time: 27.5,
      text: "Cause there is no circumstance that you can't handle"
    },
    {
      time: 33.1,
      text: "When you use your mind"
    },
    {
      time: 34.7,
      text: "Mr. Bad's got it good"
    },
    {
      time: 36.8,
      text: "But this ain't his neighborhood"
    },
    {
      time: 38.8,
      text: "He's taking over, no, no"
    },
    {
      time: 43.2,
      text: "Time is now, he can't hide"
    },
    {
      time: 45.4,
      text: "Find the power deep inside"
    },
    {
      time: 47.2,
      text: "And make it happen"
    },
    {
      time: 51.6,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 58.6,
      text: "Trouble keeps you running faster"
    },
    {
      time: 60.5,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 67.1,
      text: "Save the planet from disaster"
    },
    {
      time: 68,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 75.5,
      text: "Spinning through a world in motion"
    },
    {
      time: 78,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 82.0,
      text: "Take it all the way!"
    },
    {
      time: 94.1,
      text: "Make your move, break it out"
    },
    {
      time: 96.3,
      text: "That's what life is all about"
    },
    {
      time: 98.2,
      text: "It's your adventure"
    },
    {
      time: 102.6,
      text: "Through the dark, to the light"
    },
    {
      time: 104.8,
      text: "It's a supersonic flight"
    },
    {
      time: 106.7,
      text: "Got to keep it goin'"
    },
    {
      time: 111.1,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 116.5,
      text: "Trouble keeps you running faster"
    },
    {
      time: 121,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 126.6,
      text: "Save the planet from disaster"
    },
    {
      time: 128.5,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 135.0,
      text: "Spinning through a world in motion"
    },
    {
      time: 138,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 141.4,
      text: "Take it all the way!"
    },
    {
      time: 162.1,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 164.7,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 170.6,
      text: "Sonic Boom, Sonic Boom"
    },
    {
      time: 179.1,
      text: "Sonic Boom, Sonic Boom"
    }
  ],
  "Sonic 3D Blast (Saturn)|You're My Hero": [
    {
      time: 21.7,
      text: "I was trapped inside for so very long..."
    },
    {
      time: 26.7,
      text: "How could things turn out so wrong"
    },
    {
      time: 31.0,
      text: "You came along to save the day..."
    },
    {
      time: 35.5,
      text: "I knew that it would be okay"
    },
    {
      time: 40.0,
      text: "My knight in shining armor came"
    },
    {
      time: 44.6,
      text: "My life would never be the same!"
    },
    {
      time: 48.4,
      text: "'Cause you're my hero"
    },
    {
      time: 51.3,
      text: "You came to rescue me!"
    },
    {
      time: 53.8,
      text: "And now you've set me free"
    },
    {
      time: 59.8,
      text: "There's so much that I want to make you see!"
    },
    {
      time: 67.4,
      text: "You're my hero"
    },
    {
      time: 69.4,
      text: "Don't ever let me go!"
    },
    {
      time: 74.0,
      text: "I just want you to know"
    },
    {
      time: 78.0,
      text: "There's so much inside and I want to let it show!"
    },
    {
      time: 94.3,
      text: "And now I owe so much to you..."
    },
    {
      time: 98.7,
      text: "Is there anything that I can do?"
    },
    {
      time: 103.5,
      text: "I want to show you that I care"
    },
    {
      time: 108.2,
      text: "When you need me, I'll be there!"
    },
    {
      time: 112.5,
      text: "I hope that you don't go away"
    },
    {
      time: 117.0,
      text: "I'll always wish that you would stay!"
    },
    {
      time: 120.9,
      text: "'Cause you're my hero"
    },
    {
      time: 123.9,
      text: "You came to rescue me!"
    },
    {
      time: 131.6,
      text: "And now you've set me free"
    },
    {
      time: 132,
      text: "There's so much that I want to make you see!"
    },
    {
      time: 139.5,
      text: "You're my hero"
    },
    {
      time: 141.8,
      text: "Don't ever let me go!"
    },
    {
      time: 146.5,
      text: "I just want you to know"
    },
    {
      time: 150.5,
      text: "There's so much inside and I want to let it show!"
    },
    {
      time: 157.1,
      text: "'Cause you're my hero"
    },
    {
      time: 159,
      text: "You came to rescue me!"
    },
    {
      time: 164.5,
      text: "And now you've set me free"
    },
    {
      time: 168.5,
      text: "There's so much that I want to make you see!"
    },
    {
      time: 175.3,
      text: "You're my hero"
    },
    {
      time: 177.6,
      text: "Don't ever let me go!"
    }
  ],
  "Sonic R|Can You Feel the Sunshine?": [
    {
      time: 13.2,
      text: "Can you see? The sun is shinin' on me"
    },
    {
      time: 18.2,
      text: "It makes me feel so free, so alive!"
    },
    {
      time: 22.7,
      text: "It makes me want to survive!"
    },
    {
      time: 25.2,
      text: "And the sky, it makes me feel so high"
    },
    {
      time: 30.3,
      text: "The bad times pass me by"
    },
    {
      time: 32.9,
      text: "'Cause today is gonna be a brighter day!"
    },
    {
      time: 39.6,
      text: "Can you feel the sunshine?"
    },
    {
      time: 42.1,
      text: "Does it brighten up your day?"
    },
    {
      time: 45.6,
      text: "Don't you feel that sometimes you just need to run away?"
    },
    {
      time: 51.7,
      text: "Reach out for the sunshine"
    },
    {
      time: 54.6,
      text: "Forget about the rain"
    },
    {
      time: 57.6,
      text: "Just think about the good times"
    },
    {
      time: 60.5,
      text: "And they will come back again"
    },
    {
      time: 65.8,
      text: "Feel the sunshine..."
    },
    {
      time: 75.5,
      text: "Without you, there's nothing for me to do"
    },
    {
      time: 80.0,
      text: "Can you feel the sunshine, too?"
    },
    {
      time: 82.7,
      text: "It's comin' through"
    },
    {
      time: 85.0,
      text: "It makes me feel brand new"
    },
    {
      time: 87.6,
      text: "When you're here, I wish you were always near"
    },
    {
      time: 92.5,
      text: "'Cause everything's so clear"
    },
    {
      time: 95.2,
      text: "And today is gonna be a brighter day!"
    },
    {
      time: 101.9,
      text: "Can you feel the sunshine?"
    },
    {
      time: 104.2,
      text: "Does it brighten up your day?"
    },
    {
      time: 107.4,
      text: "(Brighten up your day...)"
    },
    {
      time: 108.0,
      text: "Don't you feel that sometimes you just need to run away?"
    },
    {
      time: 114.0,
      text: "Reach out for the sunshine"
    },
    {
      time: 116.9,
      text: "Forget about the rain"
    },
    {
      time: 119.9,
      text: "Just think about the good times"
    },
    {
      time: 122.8,
      text: "And they will come back again"
    },
    {
      time: 126.2,
      text: "When the sun goes down"
    },
    {
      time: 128.9,
      text: "I feel like I am waiting"
    },
    {
      time: 132.1,
      text: "For another day"
    },
    {
      time: 134.9,
      text: "When the clouds go away"
    },
    {
      time: 140.0,
      text: "Can you feel it?"
    },
    {
      time: 143.1,
      text: "Ooh-hoo..."
    },
    {
      time: 146.1,
      text: "Can you feel it?"
    },
    {
      time: 148.8,
      text: "Oh..."
    },
    {
      time: 152.2,
      text: "Can you feel it?"
    },
    {
      time: 155.3,
      text: "Oh..."
    },
    {
      time: 158.2,
      text: "Can you feel it?"
    },
    {
      time: 162.7,
      text: "Can you feel the sunshine?"
    },
    {
      time: 165.1,
      text: "Does it brighten up your day?"
    },
    {
      time: 168.5,
      text: "(Brighten up your day...)"
    },
    {
      time: 168.8,
      text: "Don't you feel that sometimes we just need to run away?"
    },
    {
      time: 174.8,
      text: "Reach out for the sunshine"
    },
    {
      time: 177.6,
      text: "Forget about the rain"
    },
    {
      time: 180.7,
      text: "Just think about the good times"
    },
    {
      time: 183.5,
      text: "And they will come back again"
    },
    {
      time: 211.7,
      text: "Can you feel the sunshine?"
    },
    {
      time: 213.7,
      text: "Does it brighten up your day?"
    },
    {
      time: 216.2,
      text: "(Brighten up your day...)"
    },
    {
      time: 217.3,
      text: "Don't you feel that sometimes you just need to run away?"
    },
    {
      time: 223.4,
      text: "(You just need to run away...)"
    },
    {
      time: 223.4,
      text: "Reach out for the sunshine"
    },
    {
      time: 226.3,
      text: "Forget about the rain"
    },
    {
      time: 229.3,
      text: "Just think about the good times"
    },
    {
      time: 232.2,
      text: "And they will come back again"
    },
    {
      time: 235.6,
      text: "Can you feel the sunshine?"
    },
    {
      time: 237.7,
      text: "(Can you feel it?)"
    },
    {
      time: 238.6,
      text: "Does it brighten up your day?"
    },
    {
      time: 240.9,
      text: "(Brighten up your day...)"
    },
    {
      time: 242.3,
      text: "Don't you feel that sometimes we just need to run away?"
    },
    {
      time: 246.6,
      text: "(Need to run away...)"
    },
    {
      time: 247.5,
      text: "Reach out for the sunshine"
    },
    {
      time: 250.5,
      text: "(Reach out...)"
    },
    {
      time: 250.5,
      text: "Forget about the rain"
    },
    {
      time: 253.6,
      text: "Just think about the good times"
    },
    {
      time: 256.0,
      text: "And they will come back again"
    },
    {
      time: 260.6,
      text: "Whoa-oh-oh-oh..."
    },
    {
      time: 264.2,
      text: "Brighten up your day..."
    },
    {
      time: 270.0,
      text: "You just need to run away..."
    },
    {
      time: 276.5,
      text: "Reach out..."
    },
    {
      time: 277.5,
      text: "You gotta reach out..."
    },
    {
      time: 281.2,
      text: "Come back again..."
    },
    {
      time: 289.7,
      text: "You gotta reach out..."
    }
  ],
  "Sonic R|Living in the City": [
    {
      time: 15.6,
      text: "Living in the city"
    },
    {
      time: 17.1,
      text: "You know you have to survive"
    },
    {
      time: 20.3,
      text: "You've got to keep the dream alive"
    },
    {
      time: 23.5,
      text: "Where everything is free"
    },
    {
      time: 26.2,
      text: "Can't you see?"
    },
    {
      time: 28.5,
      text: "Living in the city"
    },
    {
      time: 30.1,
      text: "You know you have to survive"
    },
    {
      time: 33.3,
      text: "You've got to keep the dream alive"
    },
    {
      time: 36.5,
      text: "Where everything is free"
    },
    {
      time: 39.2,
      text: "Can't you see?"
    },
    {
      time: 42.4,
      text: "So many different things to see"
    },
    {
      time: 45.9,
      text: "There's no time"
    },
    {
      time: 48.9,
      text: "So many different things to do"
    },
    {
      time: 51.9,
      text: "But there's no time"
    },
    {
      time: 54.6,
      text: "So many people all around"
    },
    {
      time: 57.8,
      text: "So many feelings to be found"
    },
    {
      time: 61.1,
      text: "Living in a city where no one lets you down"
    },
    {
      time: 67.6,
      text: "Living in the city"
    },
    {
      time: 69.0,
      text: "You know you have to survive"
    },
    {
      time: 72.2,
      text: "You've got to keep the dream alive"
    },
    {
      time: 75.4,
      text: "Where everything is free"
    },
    {
      time: 78.1,
      text: "Can't you see?"
    },
    {
      time: 80.5,
      text: "Living in the city, in the city"
    },
    {
      time: 81.6,
      text: "You know you have to survive"
    },
    {
      time: 85.2,
      text: "You've got to keep the dream alive"
    },
    {
      time: 88.4,
      text: "Where everything is free"
    },
    {
      time: 91.1,
      text: "Can't you see?"
    },
    {
      time: 94.3,
      text: "So many things that we've been through"
    },
    {
      time: 97.7,
      text: "Can you feel it?"
    },
    {
      time: 100.8,
      text: "So many things for us to do"
    },
    {
      time: 103.8,
      text: "But can you feel it?"
    },
    {
      time: 106.4,
      text: "So many faces all around"
    },
    {
      time: 109.7,
      text: "So many places to be found"
    },
    {
      time: 113.0,
      text: "Living in a city where nothing gets you down"
    },
    {
      time: 118.1,
      text: "Oh..."
    },
    {
      time: 119.3,
      text: "Living in the city"
    },
    {
      time: 120.9,
      text: "You know you have to survive"
    },
    {
      time: 124.1,
      text: "You've got to keep the dream alive"
    },
    {
      time: 127.3,
      text: "Where everything is free"
    },
    {
      time: 129.9,
      text: "Can't you see?"
    },
    {
      time: 132.3,
      text: "Living in the city"
    },
    {
      time: 133.8,
      text: "You know you have to survive"
    },
    {
      time: 137.1,
      text: "You've got to keep the dream alive"
    },
    {
      time: 140.3,
      text: "Where everything is free"
    },
    {
      time: 143.0,
      text: "Can't you see?"
    },
    {
      time: 145.5,
      text: "In the sky at night"
    },
    {
      time: 148.4,
      text: "The stars are shinin' bright"
    },
    {
      time: 151.5,
      text: "You can see the city lights"
    },
    {
      time: 155.0,
      text: "'Cause I'm here to make it right"
    },
    {
      time: 161.1,
      text: "In the city..."
    },
    {
      time: 164.7,
      text: "Oh..."
    },
    {
      time: 166.3,
      text: "Yeah..."
    },
    {
      time: 168.5,
      text: "Oh..."
    },
    {
      time: 171.3,
      text: "Living in the city"
    },
    {
      time: 172.8,
      text: "You know you have to survive"
    },
    {
      time: 176.0,
      text: "You've got to keep the dream alive"
    },
    {
      time: 179.0,
      text: "Where everything is free"
    },
    {
      time: 181.9,
      text: "Can't you see?"
    },
    {
      time: 184.6,
      text: "Living in the city"
    },
    {
      time: 185.7,
      text: "You know you have to survive"
    },
    {
      time: 189.0,
      text: "You've got to keep the dream alive"
    },
    {
      time: 192.1,
      text: "Where everything is free"
    },
    {
      time: 194.8,
      text: "Can't you see?"
    },
    {
      time: 197.2,
      text: "Living in the city"
    },
    {
      time: 198.7,
      text: "You know you have to survive"
    },
    {
      time: 201.9,
      text: "You've got to keep the dream alive"
    },
    {
      time: 204.9,
      text: "Where everything is free"
    },
    {
      time: 207.8,
      text: "Can't you see?"
    },
    {
      time: 212.9,
      text: "In the city, in the city"
    },
    {
      time: 219.9,
      text: "Living in the city"
    },
    {
      time: 221.4,
      text: "Oh..."
    },
    {
      time: 224.2,
      text: "In the city"
    },
    {
      time: 226.3,
      text: "Living in the city"
    },
    {
      time: 227.1,
      text: "Living in the city"
    },
    {
      time: 237.6,
      text: "You know you have to survive"
    },
    {
      time: 240.1,
      text: "Living in the city"
    },
    {
      time: 241.3,
      text: "Oh, oh, oh..."
    },
    {
      time: 241.6,
      text: "Living in the city"
    },
    {
      time: 249.1,
      text: "Oh, oh, oh, oh, oh..."
    },
    {
      time: 252.3,
      text: "Living in the city"
    },
    {
      time: 253,
      text: "In the city, in the city"
    },
    {
      time: 255,
      text: "Living in the city"
    },
    {
      time: 260,
      text: "In the city, in the city"
    },
    {
      time: 271.3,
      text: "Living in the city"
    },
    {
      time: 283.9,
      text: "Living in the city"
    }
  ],
  "Sonic R|Back in Time": [
    {
      time: 27.4,
      text: "Sometimes I ask myself"
    },
    {
      time: 30.1,
      text: "What am I doin' here?"
    },
    {
      time: 33.4,
      text: "I think of all the reasons"
    },
    {
      time: 36.2,
      text: "But it's still not clear"
    },
    {
      time: 40.6,
      text: "I look at places to go"
    },
    {
      time: 43.1,
      text: "There's nothin' near"
    },
    {
      time: 45.5,
      text: "So take me away from this"
    },
    {
      time: 47.4,
      text: "'Cause this place I'll hardly miss"
    },
    {
      time: 51.7,
      text: "So take me back in time"
    },
    {
      time: 56.2,
      text: "To another world"
    },
    {
      time: 58.7,
      text: "When you can be mine"
    },
    {
      time: 62.8,
      text: "We don't have to worry"
    },
    {
      time: 65.2,
      text: "When you're by my side"
    },
    {
      time: 69.0,
      text: "There's nothin' I don't know"
    },
    {
      time: 71.5,
      text: "There's nothin' to decide"
    },
    {
      time: 75.6,
      text: "Apart from where we want to go"
    },
    {
      time: 92.3,
      text: "What am I doin' now"
    },
    {
      time: 95.0,
      text: "By comin' back for more?"
    },
    {
      time: 99.3,
      text: "Is it me, or have I been here before?"
    },
    {
      time: 105.5,
      text: "I want to go somewhere"
    },
    {
      time: 107.5,
      text: "That we can explore"
    },
    {
      time: 110.4,
      text: "Just take me away from here"
    },
    {
      time: 112.4,
      text: "To somewhere that's nowhere near"
    },
    {
      time: 116.7,
      text: "So take me back in time"
    },
    {
      time: 121.1,
      text: "To another world"
    },
    {
      time: 123.6,
      text: "When you can be mine"
    },
    {
      time: 127.7,
      text: "We don't have to worry"
    },
    {
      time: 130.0,
      text: "When you're by my side"
    },
    {
      time: 133.9,
      text: "There's nothin' I don't know"
    },
    {
      time: 136.3,
      text: "There's nothin' to decide"
    },
    {
      time: 140.4,
      text: "Apart from where we want to go"
    },
    {
      time: 147.1,
      text: "Take me there..."
      // Original timing file says "Take me home", but official lyrics are "Take me there"
    },
    {
      time: 148.3,
      text: "Take me anywhere you want to go"
    },
    {
      time: 153.5,
      text: "To a place that we both know"
    },
    {
      time: 171.9,
      text: "So take me..."
    },
    {
      time: 177,
      text: "So take me..."
    },
    {
      time: 179,
      text: "So take me..."
    },
    {
      time: 182.3,
      text: "So take me back in time"
    },
    {
      time: 186.0,
      text: "To another world"
    },
    {
      time: 188.5,
      text: "When you can be mine"
    },
    {
      time: 192.5,
      text: "We don't have to worry"
    },
    {
      time: 194.9,
      text: "When you're by my side"
    },
    {
      time: 198.7,
      text: "There's nothin' I don't know"
    },
    {
      time: 201.2,
      text: "There's nothin' to decide"
    },
    {
      time: 205.3,
      text: "Apart from where we want to go"
    },
    {
      time: 209.4,
      text: "Back in time..."
    },
    {
      time: 210.8,
      text: "I'm goin' back in time..."
    },
    {
      time: 215.2,
      text: "Back in time..."
    },
    {
      time: 220.4,
      text: "So take me..."
    },
    {
      time: 221.7,
      text: "Back in time..."
    },
    {
      time: 226.9,
      text: "So take me..."
    },
    {
      time: 233.3,
      text: "So take me..."
    },
    {
      time: 242.0,
      text: "Back in time..."
    },
    {
      time: 243.1,
      text: "So take me..."
    },
    {
      time: 246.3,
      text: "So take me..."
    },
    {
      time: 247.2,
      text: "Back in time..."
    },
    {
      time: 247.2,
      text: "So take me..."
    },
    {
      time: 247.2,
      text: "Back in time..."
    },
    {
      time: 247.2,
      text: "So take me..."
    },
    {
      time: 247.2,
      text: "So take me..."
    },
    {
      time: 247.6,
      text: "Back in time..."
    },
    {
      time: 250.2,
      text: "Back in time..."
    },
    {
      time: 261.2,
      text: "Back in time..."
    },
    {
      time: 263.2,
      text: "Back in time..."
    }
  ],
  "Sonic R|Work It Out": [
    {
      time: 26.7,
      text: "We all need to work together"
    },
    {
      time: 30.3,
      text: "To build a better life"
    },
    {
      time: 33.7,
      text: "To make it what we feel"
    },
    {
      time: 37.1,
      text: "We have to make it real"
    },
    {
      time: 40.2,
      text: "We all need to remember"
    },
    {
      time: 44.5,
      text: "That nothing in this world comes for free"
    },
    {
      time: 46.8,
      text: "We have to make it what we want"
    },
    {
      time: 50.6,
      text: "Just you and me and everybody"
    },
    {
      time: 54.2,
      text: "Work it out, work it out"
    },
    {
      time: 55.8,
      text: "Think about it"
    },
    {
      time: 57.5,
      text: "Work it out, work it out"
    },
    {
      time: 59.2,
      text: "Talk about it"
    },
    {
      time: 60.9,
      text: "Work it out, work it out"
    },
    {
      time: 62.6,
      text: "Make it happen"
    },
    {
      time: 64.0,
      text: "Let's work it out, work it out"
    },
    {
      time: 66.2,
      text: "We've got to make it real"
    },
    {
      time: 70.0,
      text: "We've got to make it real"
    },
    {
      time: 73.0,
      text: "We've got to make it real"
    },
    {
      time: 76.8,
      text: "We've got to make it real"
    },
    {
      time: 87.4,
      text: "We all know that life gets harder"
    },
    {
      time: 90.9,
      text: "It's getting harder day by day"
    },
    {
      time: 94.0,
      text: "But we can show that we are trying"
    },
    {
      time: 97.7,
      text: "We're making sure that everyone can say"
    },
    {
      time: 100.9,
      text: "You're the one I can depend on"
    },
    {
      time: 104.6,
      text: "No one else can put it right"
    },
    {
      time: 107.6,
      text: "I'm someone you can rely on"
    },
    {
      time: 111.4,
      text: "'Cause we're not giving up without a fight"
    },
    {
      time: 115.7,
      text: "Work it out, work it out"
    },
    {
      time: 116.8,
      text: "Think about it"
    },
    {
      time: 118.2,
      text: "Work it out, work it out"
    },
    {
      time: 119.9,
      text: "Talk about it"
    },
    {
      time: 121.6,
      text: "Work it out, work it out"
    },
    {
      time: 123.2,
      text: "Make it happen"
    },
    {
      time: 124.7,
      text: "Let's work it out, work it out"
    },
    {
      time: 126.9,
      text: "We've got to make it real"
    },
    {
      time: 130.7,
      text: "We've got to make it real"
    },
    {
      time: 133.6,
      text: "We've got to make it real"
    },
    {
      time: 137.4,
      text: "We've got to make it real"
    },
    {
      time: 155.3,
      text: "Yeeeeeeeeeeeeeeeeeeeeah"
    },
    {
      time: 161.5,
      text: "Oh-hoh, oh-hoh..."
    },

    // Primeiro chorus pós-YEAH

    {
      time: 169.8,
      text: "Work it out, work it out"
    },
    {
      time: 171.4,
      text: "Think about it"
    },
    {
      time: 173.1,
      text: "Work it out, work it out"
    },
    {
      time: 174.8,
      text: "Talk about it"
    },
    {
      time: 176.5,
      text: "Work it out, work it out"
    },
    {
      time: 178.2,
      text: "Make it happen"
    },
    {
      time: 179.7,
      text: "Let's work it out, work it out"
    },
    {
      time: 181.9,
      text: "We've got to make it real"
    },
    {
      time: 185.7,
      text: "We've got to make it real"
    },
    {
      time: 188.6,
      text: "We've got to make it real"
    },
    {
      time: 192.4,
      text: "We've got to make it real"
    },


    // Overlap 1

    {
      time: 202.2,
      text: "Work it out, work it out"
    },
    {
      time: 203.3,
      text: "(We've got to make it real)"
    },
    {
      time: 203.3,
      text: "Think about it"
    },
    {
      time: 206.4,
      text: "Work it out, work it out"
    },
    {
      time: 207.5,
      text: "(We've got to make it real)"
    },
    {
      time: 207.5,
      text: "Talk about it"
    },
    {
      time: 210.0,
      text: "Work it out, work it out"
    },
    {
      time: 210.9,
      text: "(We've got to make it real)"
    },
    {
      time: 210.9,
      text: "Make it happen"
    },
    {
      time: 212.9,
      text: "Let's work it out, work it out"
    },
    {
      time: 214.2,
      text: "We've got to make it real"
    },


    // Overlap 2 (mais cheio)

    {
      time: 216.9,
      text: "Work it out, work it out"
    },
    {
      time: 218.0,
      text: "(We've got to make it real)"
    },
    {
      time: 218.0,
      text: "Think about it"
    },
    {
      time: 220.0,
      text: "(Think about it)"
    },
    {
      time: 220.1,
      text: "Work it out, work it out"
    },
    {
      time: 221.1,
      text: "(We've got to make it real)"
    },
    {
      time: 221.1,
      text: "Talk about it"
    },
    {
      time: 223.6,
      text: "(Talk about it)"
    },
    {
      time: 223.6,
      text: "Work it out, work it out"
    },
    {
      time: 224.7,
      text: "(We've got to make it real)"
    },
    {
      time: 224.7,
      text: "Make it happen"
    },
    {
      time: 227.0,
      text: "(Make it happen)"
    },
    {
      time: 227.0,
      text: "Let's work it out, work it out"
    },
    {
      time: 227.9,
      text: "We've got to make it real"
    },


    // Refrão final

    {
      time: 230.1,
      text: "Work it out, work it out"
    },
    {
      time: 231.4,
      text: "(We've got to make it real)"
    },
    {
      time: 231.4,
      text: "Think about it"
    },
    {
      time: 234.0,
      text: "Work it out, work it out"
    },
    {
      time: 234.6,
      text: "(We've got to make it real)"
    },
    {
      time: 234.6,
      text: "Talk about it"
    },
    {
      time: 237.1,
      text: "Work it out, work it out"
    },
    {
      time: 238.1,
      text: "(We've got to make it real)"
    },
    {
      time: 238.1,
      text: "Make it happen"
    },
    {
      time: 240.2,
      text: "Let's work it out, work it out"
    },
    {
      time: 240.8,
      text: "We've got to make it real (Real, yeah)"
    },


    // Finalizações

    {
      time: 243.7,
      text: "We've got to make it real"
    },
    {
      time: 247.6,
      text: "We've got to make it real"
    },
    {
      time: 250.5,
      text: "We've got to make it real"
    },
    {
      time: 254.3,
      text: "We've got to make it real"
    }
  ],
  "Sonic R|Diamond in the Sky": [
    {
      time: 26.38,
      text: "Another day is like a new beginning"
    },
    {
      time: 32.72,
      text: "And so today I know that it's a new start"
    },
    {
      time: 39.08,
      text: "I know the bad times are disappearing"
    },
    {
      time: 45.42,
      text: "Cause now I know that we'll never be apart"
    },
    {
      time: 51.30,
      text: "You're the one that makes me feel so high"
    },
    {
      time: 56.04,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 57.54,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 61.99,
      text: "Cause you're my diamond in the sky"
    },
    {
      time: 64.12,
      text: "You're the one that makes me feel so high"
    },
    {
      time: 68.28,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 70.36,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 75.22,
      text: "Cause you're my diamond in the sky"
    },
    {
      time: 80.12,
      text: "Yeah"
    },

    {
      time: 90.36,
      text: "Another road that we must travel"
    },
    {
      time: 96.70,
      text: "Another night for you to show me the way"
    },
    {
      time: 103.10,
      text: "And so today, I give up dreaming"
    },
    {
      time: 109.36,
      text: "Cause now I know, that I need you everyday"
    },
    {
      time: 115.30,
      text: "You're the one that makes me feel so high"
    },
    {
      time: 120.14,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 121.56,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 125.99,
      text: "Cause you're my diamond in the sky"
    },
    {
      time: 128.10,
      text: "You're the one that makes me feel so high"
    },
    {
      time: 132.35,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 134.32,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 138.67,
      text: "Cause you're my diamond in the sky"
    },
    {
      time: 141.78,
      text: "Yeah"
    },

    {
      time: 146.34,
      text: "Oh..."
    },
    {
      time: 154.92,
      text: "Where do all the rainbows go?"
    },
    {
      time: 156.72,
      text: "To somewhere I don't know"
    },
    {
      time: 160.70,
      text: "Wherever it is"
    },
    {
      time: 162.06,
      text: "I want to go"
    },
    {
      time: 167.30,
      text: "Oh, oh, oh"
    },
    {
      time: 171.94,
      text: "Wherever it is, I want to go"
    },
    {
      time: 180.90,
      text: "Feel so high..."
    },
    {
      time: 190.56,
      text: "Feel so high!"
    },

    {
      time: 190.56,
      text: "You're the one that makes me feel so high"
    },
    {
      time: 197.30,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 198.32,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 203.23,
      text: "Cause you're my diamond in the sky"
    },
    {
      time: 204.86,
      text: "You're the one that makes me feel so high"
    },
    {
      time: 209.28,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 211.12,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 215.54,
      text: "Cause you're my diamond in the sky"
    },

    {
      time: 223.44,
      text: "Feel so high"
    },
    {
      time: 230.46,
      text: "You're the one that makes me feel so high"
    },
    {
      time: 235.24,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 236.72,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 245.05,
      text: "Diamond in the sky"
    },
    {
      time: 246.28,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 249.48,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 253,
      text: "Diamond in the sky"
    },
    {
      time: 255.50,
      text: "Oh, you're the one that makes me feel so high"
    },
    {
      time: 259.78,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 262.32,
      text: "I never want to hear you say goodbye"
    },
    {
      time: 266,
      text: "Diamond in the sky"
    },
    {
      time: 271.30,
      text: "Just like the diamonds in the sky"
    },
    {
      time: 275.11,
      text: "High"
    },
    {
      time: 276.78,
      text: "Oh"
    },
    {
      time: 280.10,
      text: "Diamond in the sky"
    },
    {
      time: 284.08,
      text: "Just like the diamonds in the sky"
    }
  ],
  "Sonic R|Super Sonic Racing": [
  ],
  "Sonic R|You're My Number One": [
  ],
  "Sonic the Hedgehog: The Movie|Look-a-Like": [
  ],
  "Sonic Adventure|Open Your Heart": [
  ],
  "Sonic Adventure 2|Escape From the City": [
    {
      time: 2.2,
      text: "Whoo! Oh yeah!"
    },
    {
      time: 9.8,
      text: "Rolling around at the speed of sound"
    },
    {
      time: 13.1,
      text: "Got places to go, gotta follow my rainbow"
    },
    {
      time: 17.2,
      text: "Can't stick around, have to keep moving on"
    },
    {
      time: 20.4,
      text: "Guess what lies ahead, only one way to find out"
    },
    {
      time: 24.9,
      text: "Must keep on moving ahead"
    },
    {
      time: 28.3,
      text: "No time for guessing, follow my plan instead"
    },
    {
      time: 32.2,
      text: "Trusting in what you can't see"
    },
    {
      time: 35.5,
      text: "Take my lead; I'll set you free"
    },
    {
      time: 39.2,
      text: "Follow me, set me free"
    },
    {
      time: 42.8,
      text: "Trust me and we will escape from the city"
    },
    {
      time: 47.1,
      text: "I'll make it through"
    },
    {
      time: 49.3,
      text: "Follow me (follow me), set me free"
    },
    {
      time: 53.9,
      text: "Trust me and we will escape from the city"
    },
    {
      time: 58.1,
      text: "I'll make it through, prove it to you"
    },
    {
      time: 62.7,
      text: "Follow me"
    },
    {
      time: 66.6,
      text: "Oh yeah"
    },
    {
      time: 70.6,
      text: "Danger is lurking around every turn"
    },
    {
      time: 74.2,
      text: "Trust your feelings, got to live and learn"
    },
    {
      time: 78.2,
      text: "I know with some luck that I'll make it through"
    },
    {
      time: 81.4,
      text: "Got no other options, only one thing to do"
    },
    {
      time: 86.1,
      text: "I don't care what lies ahead"
    },
    {
      time: 89.2,
      text: "No time for guessing, follow my plan instead"
    },
    {
      time: 92.9,
      text: "Find the next stage, no matter what that may be"
    },
    {
      time: 96.4,
      text: "Take my lead, I'll set you free"
    },
    {
      time: 100.1,
      text: "Follow me, set me free"
    },
    {
      time: 103.8,
      text: "Trust me and we will escape from the city"
    },
    {
      time: 108.0,
      text: "I'll make it through"
    },
    {
      time: 110.2,
      text: "Follow me (follow me), set me free"
    },
    {
      time: 114.8,
      text: "Trust me and we will escape from the city"
    },
    {
      time: 119.0,
      text: "I'll make it through, prove it to you"
    },
    {
      time: 123.6,
      text: "Follow me"
    },
    {
      time: 127.3,
      text: "Follow me"
    },
    {
      time: 131.9,
      text: "I'll make it through, oh yeah"
    }
  ],
  "Sonic Adventure 2|Live & Learn": [
    {
      time: 14.5,
      text: "Can you feel life movin' through your mind?"
    },
    {
      time: 20.5,
      text: "Ooh, looks like it came back for more, yeah!"
    },
    {
      time: 25.0,
      text: "Can you feel time slippin' down your spine?"
    },
    {
      time: 32.2,
      text: "Ooh, you try and try to ignore, yeah!"
    },
    {
      time: 37.9,
      text: "But you can hardly swallow your fears and pain"
    },
    {
      time: 49.1,
      text: "When you can't help but follow"
    },
    {
      time: 54.8,
      text: "It puts you right back where you came"
    },
    {
      time: 61.6,
      text: "LIVE AND LEARN"
    },
    {
      time: 63.7,
      text: "Hanging on the edge of tomorrow"
    },
    {
      time: 67.2,
      text: "LIVE AND LEARN"
    },
    {
      time: 68.6,
      text: "From the works of yesterday"
    },
    {
      time: 72.8,
      text: "LIVE AND LEARN"
    },
    {
      time: 74.9,
      text: "If you beg or if you borrow"
    },
    {
      time: 78.3,
      text: "LIVE AND LEARN"
    },
    {
      time: 79.8,
      text: "You may never find your way"
    },
    {
      time: 85.7,
      text: "Whoa, oh, oh yeah!"
    },
    {
      time: 91.3,
      text: "Can you feel life tangle you up inside?"
    },
    {
      time: 97.1,
      text: "Yeah, now your face down on the floor!"
    },
    {
      time: 101.4,
      text: "Oh-oh!"
    },
    {
      time: 103.5,
      text: "But you can't save your sorrow"
    },
    {
      time: 108,
      text: "You've paid in trade"
    },
    {
      time: 114.5,
      text: "When you can't help but follow"
    },
    {
      time: 120.4,
      text: "It puts you right back where you came"
    },
    {
      time: 127.2,
      text: "LIVE AND LEARN"
    },
    {
      time: 129.3,
      text: "Hanging on the edge of tomorrow"
    },
    {
      time: 132.8,
      text: "LIVE AND LEARN"
    },
    {
      time: 134.2,
      text: "From the works of yesterday"
    },
    {
      time: 138.4,
      text: "LIVE AND LEARN"
    },
    {
      time: 140.5,
      text: "If you beg or if you borrow"
    },
    {
      time: 143.9,
      text: "LIVE AND LEARN"
    },
    {
      time: 145.4,
      text: "You may never find your way"
    },
    {
      time: 154.4,
      text: "Hey, whoa, whoa"
    },
    {
      time: 156.9,
      text: "Oh, yeah!"
    },
    {
      time: 157.3,
      text: "Yeah, yeah, yeah, yeah, yeah!"
    },
    {
      time: 179.5,
      text: "There's a face searching far, so far and wide"
    },
    {
      time: 185.9,
      text: "There's a place where you dream you'd never find"
    },
    {
      time: 190.7,
      text: "Hold on to what if?"
    },
    {
      time: 193.5,
      text: "Hold on to what if?"
    },
    {
      time: 198.4,
      text: "LIVE AND LEARN"
    },
    {
      time: 200.5,
      text: "Hanging on the edge of tomorrow"
    },
    {
      time: 203.9,
      text: "LIVE AND LEARN"
    },
    {
      time: 205.4,
      text: "From the works of yesterday"
    },
    {
      time: 209.5,
      text: "LIVE AND LEARN"
    },
    {
      time: 211.6,
      text: "If you beg or if you borrow"
    },
    {
      time: 215.1,
      text: "LIVE AND LEARN"
    },
    {
      time: 216.6,
      text: "You may never find your way"
    },
    {
      time: 221.4,
      text: "LIVE AND LEARN"
    },
    {
      time: 223.5,
      text: "Hanging on the edge of tomorrow"
    },
    {
      time: 227.0,
      text: "LIVE AND LEARN"
    },
    {
      time: 228.4,
      text: "From the works of yesterday"
    },
    {
      time: 232.6,
      text: "LIVE AND LEARN"
    },
    {
      time: 234.7,
      text: "If you beg or if you borrow"
    },
    {
      time: 238.2,
      text: "LIVE AND LEARN"
    },
    {
      time: 239.6,
      text: "You may never find your way"
    },
    {
      time: 249.3,
      text: "LIVE AND LEARN"
    },
    {
      time: 264.0,
      text: "LIVE AND LEARN"
    }
  ]
};

const trackTitle = document.getElementById("trackTitle");
const trackGame = document.getElementById("trackGame");
const trackComposer = document.getElementById("trackComposer");

const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");

const volumeSlider = document.getElementById("volumeSlider");

const autoplayToggle = document.getElementById("autoplayToggle");
const loopToggle = document.getElementById("loopToggle");
const randomToggle = document.getElementById("randomToggle");

const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");

const darkModeToggle = document.getElementById("darkModeToggle");
const oledModeToggle =
  document.getElementById(
    "oledModeToggle"
  );

oledModeToggle.addEventListener(
  "change",
  () => {

    if (oledModeToggle.checked) {

      document.body.classList.add(
        "oled-mode"
      );

      document.body.classList.remove(
        "dark-mode"
      );

      darkModeToggle.checked = false;

      darkModeToggle.disabled = true;

    } else {

      document.body.classList.remove(
        "oled-mode"
      );

      darkModeToggle.disabled = false;

    }

    updateLogo();

    saveSettings();

  }
);
const layoutToggle = document.getElementById("layoutToggle");

const player = document.querySelector(".player");

const timeDisplay = document.getElementById("timeDisplay");
const defaultTitle = document.title;

// ================================
// FADE SYSTEM
// ================================

let isTransitioning = false;

const FADE_DURATION = 1200;
const FADE_INTERVAL = 50;

// ================================
// ESTADO
// ================================
let isLoop = false;
let endFadeTriggered = false;
let trackHistory = [];
let isGoingBack = false;
let screenshotInterval = null;
let screenshotIndex = 0;
let screenshotTimeout = null;
let screenshotFadeTimeout = null;
let useFadeTransitions = true;
let triviaAnimation;

let tracks = Array.from(document.querySelectorAll(".track"));

let currentIndex = 0;

let isAutoplay = true;
let isRandom = true;

// SWITCH TRACK (COM FADE)

function switchTrack(newIndex) {

  if (
    !isGoingBack &&
    currentIndex !== undefined &&
    currentIndex !== null &&
    currentIndex !== newIndex
  ) {

    trackHistory.push(currentIndex);

    if (trackHistory.length > 100) {
      trackHistory.shift();
    }

  }

  isGoingBack = false;

  currentIndex = newIndex;

  loadTrack(currentIndex);

  playTrack();

}

// ================================
// LOCAL STORAGE
// ================================

function saveSettings() {
  localStorage.setItem("sonicRadioSettings", JSON.stringify({
    autoplay: isAutoplay,
    random: isRandom,
    loop: isLoop,
    volume: audio.volume,
    darkMode: document.body.classList.contains("dark-mode"),
    oledMode: document.body.classList.contains("oled-mode"),
    horizontalLayout: player.classList.contains("horizontal")
  }));
}

function updateLogo() {

  const lightLogo =
    document.querySelector(".logo-light");

  const darkLogo =
    document.querySelector(".logo-dark");

  const oledLogo =
    document.querySelector(".logo-oled");

  let nextLogo;

  if (
    document.body.classList.contains(
      "oled-mode"
    )
  ) {

    nextLogo = oledLogo;

  } else if (
    document.body.classList.contains(
      "dark-mode"
    )
  ) {

    nextLogo = darkLogo;

  } else {

    nextLogo = lightLogo;

  }

  const currentLogo =
    [lightLogo, darkLogo, oledLogo]
      .find(
        logo =>
          getComputedStyle(logo)
            .display !== "none"
      );

  if (
    currentLogo === nextLogo
  ) return;

  currentLogo.classList.add(
    "fade-out"
  );

  setTimeout(() => {

    currentLogo.style.display =
      "none";

    nextLogo.style.display =
      "block";

    nextLogo.style.opacity =
      "0";

    requestAnimationFrame(() => {

      nextLogo.style.opacity =
        "1";

    });

    currentLogo.classList.remove(
      "fade-out"
    );

  }, 200);

}

// Info scroll
function startInfoScroll() {

  cancelAnimationFrame(
    triviaAnimation
  );

  const container =
    infoText;

  const maxScroll =
    container.scrollHeight -
    container.clientHeight;

  if (maxScroll <= 0) return;

  container.scrollTop = 0;

  function animate() {

    container.scrollTop += 0.08;

    if (
      container.scrollTop >= maxScroll
    ) {

      setTimeout(() => {

        container.scrollTop = 0;

        animate();

      }, 4000);

      return;
    }

    triviaAnimation =
      requestAnimationFrame(
        animate
      );

  }

  animate();

}

function loadSettings() {
  const saved = localStorage.getItem("sonicRadioSettings");
  if (!saved) return;

  let settings;

  try {
    settings = JSON.parse(saved);
  } catch {
    return;
  }

  if (typeof settings.autoplay === "boolean") {
    isAutoplay = settings.autoplay;
    if (autoplayToggle) autoplayToggle.checked = settings.autoplay;
  }

  if (typeof settings.random === "boolean") {
    isRandom = settings.random;
    if (randomToggle) randomToggle.checked = settings.random;
  }

  if (typeof settings.loop === "boolean") {
    isLoop = settings.loop;
    if (loopToggle) loopToggle.checked = settings.loop;
  }

  if (typeof settings.volume === "number") {
    audio.volume = settings.volume;
    if (volumeSlider) volumeSlider.value = settings.volume;
  }

  if (settings.darkMode) {

    document.body.classList.add("dark-mode");

    if (darkModeToggle) {
      darkModeToggle.checked = true;
    }

    document.querySelector(".logo-light").style.display = "none";
    document.querySelector(".logo-dark").style.display = "block";

  }

  if (settings.oledMode) {

    document.body.classList.add("oled-mode");

    if (oledModeToggle) {
      oledModeToggle.checked = true;
    }

    document.querySelector(".logo-light").style.display = "none";
    document.querySelector(".logo-oled").style.display = "block";

  }

  if (settings.horizontalLayout) {

    player.classList.add("horizontal");

    infoBox.classList.add(
      "hidden-horizontal"
    );

    playerColumn.classList.add(
      "horizontal-layout"
    );

    radioLayout.classList.add(
      "horizontal-layout"
    );

    settingsPanel.classList.add(
      "horizontal-mode"
    );

    if (layoutToggle) {
      layoutToggle.checked = true;
    }
  }
}

// Drag progress
let isDraggingProgress = false;
let dragPercent = 0;

// requestAnimationFrame
let rafId = null;

function startScreenshots(game, title) {

  clearInterval(screenshotInterval);
  clearTimeout(screenshotTimeout);
  clearTimeout(screenshotFadeTimeout);

  screenshotLayer.classList.remove(
    "visible"
  );

  const key =
    `${game}|${title}`;

  const data =
    screenshotMap[key];

  if (!data) {
    return;
  }

  const shots = [];

  for (let i = 1; i <= data.total; i++) {

    shots.push(
      `assets/screenshots/${data.folder}/${data.prefix}${i}.webp`
    );

  }

  screenshotIndex = 0;

  // espera 15s antes da primeira screenshot
  screenshotTimeout = setTimeout(() => {

    let showingScreenshot = false;

    screenshotInterval = setInterval(() => {

      if (!showingScreenshot) {

        // Mostrar screenshot
        screenshotLayer.src =
          shots[screenshotIndex];

        screenshotIndex++;

        if (
          screenshotIndex >=
          shots.length
        ) {

          screenshotIndex = 0;

        }

        requestAnimationFrame(() => {

          screenshotLayer.classList.add(
            "visible"
          );

        });

      } else {

        // Voltar para a cover
        screenshotLayer.classList.remove(
          "visible"
        );

      }

      showingScreenshot =
        !showingScreenshot;

    }, 15000);

    // Primeira screenshot após os primeiros 15 segundos
    screenshotLayer.src =
      shots[screenshotIndex];

    screenshotIndex++;

    if (
      screenshotIndex >=
      shots.length
    ) {

      screenshotIndex = 0;

    }

    requestAnimationFrame(() => {

      screenshotLayer.classList.add(
        "visible"
      );

    });

    showingScreenshot = true;

  }, 15000);

}

function fitComposerText() {

  const composer = document.getElementById("trackComposer");

  composer.style.fontSize = "14px";

  while (
    composer.scrollWidth > composer.clientWidth &&
    parseFloat(
      getComputedStyle(composer).fontSize
    ) > 10
  ) {

    const currentSize =
      parseFloat(
        getComputedStyle(composer).fontSize
      );

    composer.style.fontSize =
      `${currentSize - 0.5}px`;
  }
}

function fitComposerText() {

  trackComposer.style.fontSize = "10px";

  while (
    trackComposer.scrollWidth >
    trackComposer.clientWidth &&
    parseFloat(
      getComputedStyle(trackComposer).fontSize
    ) > 10
  ) {

    const currentSize =
      parseFloat(
        getComputedStyle(trackComposer).fontSize
      );

    trackComposer.style.fontSize =
      `${currentSize - 0.5}px`;
  }

}

// ================================
// FUNÇÃO CARREGAR MÚSICA
// ================================


function loadTrack(index) {
  const selected = tracks[index];

  if (!selected) return;
  endFadeTriggered = false;

  audio.src = selected.dataset.src;

  clearInterval(screenshotInterval);
  clearTimeout(screenshotTimeout);
  clearTimeout(screenshotFadeTimeout);

  screenshotLayer.classList.remove(
    "visible"
  );

  cover.classList.add("changing");

  screenshotFadeTimeout = setTimeout(() => {

    cover.src =
      selected.dataset.cover;

    cover.onload = () => {

      cover.classList.remove(
        "changing"
      );

      startScreenshots(
        selected.dataset.game,
        selected.dataset.title
      );

    };

  }, 180);

  trackGame.textContent =
    selected.dataset.game;

  trackComposer.textContent =
    selected.dataset.composer || "";

  fitComposerText();

  document.title =
    "🎵 " +
    selected.dataset.title +
    " | " +
    selected.dataset.game;

  const infoKey =
    `${selected.dataset.game}|${selected.dataset.title}`;

  const trivia =
    triviaMap[infoKey];

  const lyrics =
    lyricsMap[infoKey];


  // ================================
  // PRIORIDADE: LYRICS
  // ================================
  const isHorizontal =
    player.classList.contains("horizontal");
  if (lyrics) {

    infoHeader.textContent =
      "LYRICS";

    infoText.innerHTML =
      lyrics.map((line, index) => `
      <div
        class="lyric-line"
        data-index="${index}"
        data-time="${line.time}"
      >
        ${line.text}
      </div>
    `).join("");

    infoBox.classList.add(
      "visible"
    );

  }


  // ================================
  // SENÃO: TRIVIA
  // ================================

  else if (trivia) {

    infoHeader.textContent =
      "DID YOU KNOW?";

    infoText.innerHTML =
      trivia;

    infoBox.classList.add(
      "visible"
    );

    setTimeout(() => {
      startInfoScroll();
    }, 500);

  }


  // ================================
  // NADA
  // ================================

  else {

    infoBox.classList.remove(
      "visible"
    );

    cancelAnimationFrame(
      triviaAnimation
    );

  }

  // reset progress visual
  progress.style.width = "0%";

  if (timeDisplay) {
    timeDisplay.textContent =
      "0:00 / 0:00";
  }

  function fitComposerText() {

    const composer =
      document.getElementById(
        "trackComposer"
      );

    let size = 10;

    composer.style.fontSize =
      size + "px";

    while (

      composer.scrollWidth >
      composer.clientWidth

      &&

      size > 6

    ) {

      size--;

      composer.style.fontSize =
        size + "px";

    }

  }

  // ================================
  // CORES DA PROGRESS BAR
  // ================================

  progress.classList.remove(
    "good-future",
    "bad-future",
    "past",
    "new-moon",
    "awakened",
    "super-sonic",
    "diamond-sky",

    "world-morning",
    "world-day",
    "world-sunset",
    "world-night",

    "crisis-flames",
    "crisis-skyscraper",
    "crisis-whirlwind",
    "crisis-tornado",

    "shadow-theme"
  );

  if (
    selected.dataset.title.includes(
      "(Good Future)"
    )
  ) {
    progress.classList.add(
      "good-future"
    );
  }

  if (
    selected.dataset.title.includes(
      "(Bad Future)"
    )
  ) {
    progress.classList.add(
      "bad-future"
    );
  }

  if (
    selected.dataset.title.includes(
      "(Past)"
    )
  ) {
    progress.classList.add("past");
  }
  if (
    selected.dataset.src.includes(
      "amazingarena.flac"
    )
  ) {
    progress.classList.add("new-moon");
  }
  if (
    selected.dataset.src.includes(
      "supersonicracing"
    )
  ) {
    progress.classList.add(
      "super-sonic"
    );
  }
  if (
    selected.dataset.src.includes(
      "diamondinthesky"
    )
  ) {
    progress.classList.add(
      "diamond-sky"
    );
  }

  // ================================
  // THEMES
  // ================================

  const zoneThemes = [
    {
      src: "greenhill",
      games: [
        "Sonic the Hedgehog (1991)",
        "Sonic the Hedgehog (8-bit)",
        "Sonic Adventure 2",
        "Sonic Battle",
        "Sonic Mania"
      ],
      className: "greenhill-mode"
    },

    // ================================
    // SONIC GENERATIONS
    // ================================

    {
      src: "greenhill1",
      games: [
        "Sonic Generations"
      ],
      className: "greenhillgens1-mode"
    },

    {
      src: "greenhill2",
      games: [
        "Sonic Generations"
      ],
      className: "greenhillgens2-mode"
    },

    {
      src: "chemicalplant1",
      games: [
        "Sonic Generations"
      ],
      className: "chemicalplant1-mode"
    },

    {
      src: "chemicalplant2",
      games: [
        "Sonic Generations"
      ],
      className: "chemicalplant2-mode"
    },

    {
      src: "skysanctuary1",
      games: [
        "Sonic Generations"
      ],
      className: "skysanctuary1-mode"
    },
    {
      src: "skysanctuary2",
      games: [
        "Sonic Generations"
      ],
      className: "skysanctuary2-mode"
    },

    {
      src: "speedhighway1",
      games: [
        "Sonic Generations"
      ],
      className: "speedhighway1-mode"
    },
    {
      src: "speedhighway2",
      games: [
        "Sonic Generations"
      ],
      className: "speedhighway2-mode"
    }
  ];


  // ================================
  // REMOVE MODES
  // ================================

  player.classList.remove(
    "shadow-mode",
    "super-sonic-mode",
    ...zoneThemes.map(
      theme => theme.className
    )
  );

  // ================================
  // APPLY THEMES
  // ================================

  zoneThemes.forEach(theme => {

    const srcMatch =
      selected.dataset.src.includes(
        theme.src
      );

    const gameMatch =

      // sem games = aceita tudo
      !theme.games ||

      // procura algum jogo compatível
      theme.games.some(game =>
        selected.dataset.game.includes(
          game
        )
      );

    if (srcMatch && gameMatch) {

      player.classList.add(
        theme.className
      );

    }

  });

  // ================================
  // SUPER SONIC RACING
  // ================================

  if (
    selected.dataset.src.includes(
      "supersonicracing"
    )
  ) {

    player.classList.add(
      "super-sonic-mode"
    );

  }

  // ================================
  // SHADOW THE HEDGEHOG
  // ================================

  if (
    selected.dataset.game.includes(
      "Shadow the Hedgehog"
    )
  ) {

    player.classList.add(
      "shadow-mode"
    );

    progress.classList.add(
      "shadow-theme"
    );

  }

  // ================================
  // TEXTO SCROLL
  // ================================

  trackTitle.textContent = selected.dataset.title;
  trackTitle.setAttribute("data-title", selected.dataset.title);

  setTimeout(checkTitleOverflow, 100);

  // ================================
  // TRACK ATIVA
  // ================================

  document
    .querySelector(".track.active")
    ?.classList.remove("active");

  selected.classList.add("active");

  document
    .querySelectorAll(".disc")
    .forEach(disc =>
      disc.classList.remove("active-disc")
    );

  selected
    .closest(".disc")
    ?.classList.add("active-disc");

  document
    .querySelectorAll(".game")
    .forEach(game =>
      game.classList.remove("active-game")
    );

  selected
    .closest(".game")
    ?.classList.add("active-game");
}

// ================================
// PLAY / PAUSE
// ================================

function playTrack() {
  audio.play().catch(() => { });

  playBtn.innerHTML =
    '<i class="fa-solid fa-pause"></i>';

  document.title =
    "🎵 " +
    trackTitle.textContent +
    " | " +
    trackGame.textContent;
}

function pauseTrack() {
  audio.pause();

  playBtn.innerHTML =
    '<i class="fa-solid fa-play"></i>';

  document.title = defaultTitle;
}

playBtn.addEventListener(
  "click",
  () => {
    audio.paused
      ? playTrack()
      : pauseTrack();
  }
);

// ================================
// FADE TROCA DE MÚSICA
// ================================

function fadeToTrack(newIndex) {

  if (isTransitioning) return;

  const wasPlaying =
    !audio.paused;

  isTransitioning = true;

  const originalVolume =
    volumeSlider
      ? parseFloat(volumeSlider.value)
      : audio.volume;

  let currentVolume =
    audio.volume;

  const fadeOut =
    setInterval(() => {

      currentVolume -=
        originalVolume /
        (
          FADE_DURATION /
          FADE_INTERVAL
        );

      if (
        currentVolume <= 0
      ) {

        clearInterval(
          fadeOut
        );

        audio.volume = 0;

        currentIndex =
          newIndex;

        loadTrack(
          currentIndex
        );

        if (wasPlaying) {

          audio.play()
            .then(() => {
              isTransitioning = false;
            })
            .catch(error => {

              console.error(error);

              playBtn.innerHTML =
                '<i class="fa-solid fa-play"></i>';

              isTransitioning = false;
            });

        } else {

          isTransitioning = false;

        }

        let fadeInVolume = 0;

        audio.volume = 0;

        const fadeIn =
          setInterval(() => {

            fadeInVolume +=
              originalVolume /
              (
                FADE_DURATION /
                FADE_INTERVAL
              );

            if (
              fadeInVolume >=
              originalVolume
            ) {

              fadeInVolume =
                originalVolume;

              clearInterval(
                fadeIn
              );

              isTransitioning =
                false;

            }

            audio.volume =
              fadeInVolume;

          }, FADE_INTERVAL);

      } else {

        audio.volume =
          currentVolume;

      }

    }, FADE_INTERVAL);

}

function getActiveTracks() {
  return tracks.filter(track =>
    !track.classList.contains("excluded")
  );
}

// ================================
// NEXT / PREV
// ================================

function nextTrack() {
  const activeTracks = getActiveTracks();

  if (activeTracks.length === 0) return;

  let targetIndex;

  if (isRandom) {

    let randomIndex;

    do {
      randomIndex = Math.floor(
        Math.random() * activeTracks.length
      );
    } while (
      activeTracks[randomIndex] === tracks[currentIndex] &&
      activeTracks.length > 1
    );

    targetIndex =
      tracks.indexOf(
        activeTracks[randomIndex]
      );

  } else {

    targetIndex = currentIndex;

    do {
      targetIndex++;

      if (targetIndex >= tracks.length) {
        targetIndex = 0;
      }

    } while (
      tracks[targetIndex].classList.contains("excluded")
    );

  }

  switchTrack(targetIndex);
}

function prevTrack() {

  if (audio.currentTime > 1) {
    audio.currentTime = 0;
    return;
  }

  if (trackHistory.length > 0) {

    isGoingBack = true;

    const previousIndex =
      trackHistory.pop();

    switchTrack(previousIndex);

    return;
  }

  audio.currentTime = 0;
}

nextBtn.addEventListener(
  "click",
  nextTrack
);

prevBtn.addEventListener(
  "click",
  prevTrack
);

document.querySelectorAll(".track").forEach(track => {
  const btn = document.createElement("span");
  btn.classList.add("toggle-btn");
  btn.textContent = "−";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    track.classList.toggle("excluded");

    if (track.classList.contains("excluded")) {
      btn.textContent = "+";

      if (tracks[currentIndex] === track) {
        nextTrack();
      }

    } else {
      btn.textContent = "−";
    }
  });

  track.appendChild(btn);
});

document.querySelectorAll(".game").forEach(game => {

  const gameTitle =
    game.querySelector(".game-title");

  const gameTracks =
    game.querySelectorAll(".track");

  const gameBtn =
    document.createElement("span");

  gameBtn.classList.add(
    "game-toggle-btn"
  );

  gameBtn.textContent = "−";

  gameBtn.addEventListener(
    "click",
    (e) => {

      e.stopPropagation();

      const excludeAll =
        !Array.from(gameTracks).every(
          track =>
            track.classList.contains(
              "excluded"
            )
        );

      gameTracks.forEach(track => {

        const trackBtn =
          track.querySelector(
            ".toggle-btn"
          );

        if (excludeAll) {

          track.classList.add(
            "excluded"
          );

          if (trackBtn) {
            trackBtn.textContent = "+";
          }

        } else {

          track.classList.remove(
            "excluded"
          );

          if (trackBtn) {
            trackBtn.textContent = "−";
          }

        }

      });

      gameBtn.textContent =
        excludeAll ? "+" : "−";

      // se a track atual foi excluída
      if (
        tracks[currentIndex]
          ?.classList.contains(
            "excluded"
          )
      ) {
        nextTrack();
      }

    }
  );

  gameTitle.appendChild(
    gameBtn
  );

});

// ================================
// CLIQUE NAS MÚSICAS
// ================================

document.querySelector(".playlist")
  .addEventListener("click", (e) => {

    const track = e.target.closest(".track");

    if (!track) return;

    if (track.classList.contains("excluded")) return;

    const clickedIndex =
      tracks.indexOf(track);

    if (clickedIndex === currentIndex) {
      return;
    }

    switchTrack(clickedIndex);

  });

// ================================
// AUTOPLAY / LOOP / RANDOM
// ================================

audio.addEventListener("ended", () => {

  if (isLoop) return;

  if (!isAutoplay) return;

  if (useFadeTransitions) {

    fadeToNextTrack();

  } else {

    nextTrack();

  }

});

// LOOP COM FADE
audio.addEventListener("timeupdate", () => {

  if (!isLoop) return;

  if (isTransitioning) return;

  if (isNaN(audio.duration)) return;

  const remaining =
    audio.duration -
    audio.currentTime;

  if (
    remaining <= 1.5 &&
    !isTransitioning
  ) {

    fadeLoopTrack();

  }

});

if (autoplayToggle) {
  autoplayToggle.addEventListener(
    "change",
    () => {

      isAutoplay =
        autoplayToggle.checked;

      if (isAutoplay && isLoop) {

        isLoop = false;
        loopToggle.checked = false;

      }

      saveSettings();
    }
  );
}

if (loopToggle) {
  loopToggle.addEventListener(
    "change",
    () => {

      isLoop =
        loopToggle.checked;

      if (isLoop) {

        isAutoplay = false;
        isRandom = false;

        autoplayToggle.checked = false;
        randomToggle.checked = false;

      }

      saveSettings();

    }
  );
}

if (randomToggle) {
  randomToggle.addEventListener(
    "change",
    () => {

      isRandom =
        randomToggle.checked;

      if (isRandom && isLoop) {

        isLoop = false;
        loopToggle.checked = false;

      }

      saveSettings();

    }
  );
}

function fadeToNextTrack() {

  if (isTransitioning) return;

  isTransitioning = true;

  const targetVolume =
    parseFloat(volumeSlider.value);

  let currentVolume =
    audio.volume;

  const fadeOut =
    setInterval(() => {

      currentVolume -= 0.03;

      if (currentVolume <= 0) {

        clearInterval(fadeOut);

        const activeTracks =
          getActiveTracks();

        let targetIndex;

        if (isRandom) {

          let randomIndex;

          do {

            randomIndex =
              Math.floor(
                Math.random() *
                activeTracks.length
              );

          } while (

            activeTracks[randomIndex] ===
            tracks[currentIndex]

            &&

            activeTracks.length > 1

          );

          targetIndex =
            tracks.indexOf(
              activeTracks[randomIndex]
            );

        } else {

          targetIndex =
            currentIndex + 1;

          if (
            targetIndex >=
            tracks.length
          ) {
            targetIndex = 0;
          }

        }

        currentIndex =
          targetIndex;

        loadTrack(currentIndex);

        audio.volume = 0;

        audio.play().then(() => {

          let fadeInVolume = 0;

          const fadeIn =
            setInterval(() => {

              fadeInVolume += 0.03;

              if (
                fadeInVolume >=
                targetVolume
              ) {

                audio.volume =
                  targetVolume;

                clearInterval(fadeIn);

                isTransitioning = false;

                return;
              }

              audio.volume =
                fadeInVolume;

            }, 50);

        });

      } else {

        audio.volume =
          currentVolume;

      }

    }, 50);

}

function fadeLoopTrack() {

  if (isTransitioning) return;

  isTransitioning = true;

  const targetVolume =
    parseFloat(volumeSlider.value);

  let currentVolume =
    audio.volume;

  const fadeOut =
    setInterval(() => {

      currentVolume -= 0.03;

      if (currentVolume <= 0) {

        clearInterval(fadeOut);

        audio.volume = 0;

        audio.currentTime = 0;

        audio.play().then(() => {

          let fadeInVolume = 0;

          const fadeIn =
            setInterval(() => {

              fadeInVolume += 0.03;

              if (
                fadeInVolume >= targetVolume
              ) {

                audio.volume =
                  targetVolume;

                clearInterval(fadeIn);

                isTransitioning = false;

                return;

              }

              audio.volume =
                fadeInVolume;

            }, 50);

        });

      } else {

        audio.volume =
          currentVolume;

      }

    }, 50);

}

function updateLyricsHighlight() {

  const selected =
    tracks[currentIndex];

  const lyricsKey =
    `${selected.dataset.game}|${selected.dataset.title}`;

  const lyrics =
    lyricsMap[lyricsKey];

  if (!lyrics) return;

  const currentTime =
    audio.currentTime;

  let activeIndex = -1;

  lyrics.forEach((line, index) => {

    if (currentTime >= line.time) {
      activeIndex = index;
    }

  });

  document
    .querySelectorAll(".lyric-line")
    .forEach((line, index) => {

      line.classList.toggle(
        "active",
        index === activeIndex
      );

      if (index === activeIndex) {

        line.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }

    });

}

// ================================
// PROGRESS BAR
// ================================

audio.addEventListener(
  "timeupdate",
  () => {

    const {
      duration,
      currentTime,
    } = audio;

    if (!duration) return;

    updateLyricsHighlight();

    // ================================
    // AUTO FADE BEFORE END
    // ================================

    if (
      useFadeTransitions &&
      !isTransitioning &&
      duration - currentTime <= 3
    ) {

      if (isLoop) {

        fadeLoopTrack();

      } else {

        fadeToNextTrack();

      }

    }

    // ================================
    // PROGRESS WIDTH
    // ================================

    const percent =
      isDraggingProgress
        ? dragPercent
        : (currentTime / duration) * 100;

    progress.style.width =
      `${percent}%`;

    // ================================
    // TIME DISPLAY
    // ================================

    const shownTime =
      isDraggingProgress
        ? (dragPercent / 100) *
        duration
        : currentTime;

    if (timeDisplay) {

      timeDisplay.textContent =
        formatTime(shownTime) +
        " / " +
        formatTime(duration);

    }

    // ================================
    // AMAZING ARENA TRANSITION
    // ================================

    if (
      audio.src.includes(
        "amazingarena.flac"
      )
    ) {

      if (currentTime >= 30) {

        progress.classList.add(
          "awakened"
        );

      } else {

        progress.classList.remove(
          "awakened"
        );

      }

    }

    // ================================
    // WORLD ENTRANCE TRANSITIONS
    // ================================

    if (
      audio.src.includes(
        "worldentrance"
      )
    ) {

      // remove fases anteriores
      progress.classList.remove(
        "world-morning",
        "world-day",
        "world-sunset",
        "world-night"
      );

      // ================================
      // MORNING
      // 0:00 → 0:49
      // ================================

      if (currentTime < 50) {

        progress.classList.add(
          "world-morning"
        );

      }

      // ================================
      // DAY
      // 0:50 → 2:16
      // ================================

      else if (currentTime < 137) {

        progress.classList.add(
          "world-day"
        );

      }

      // ================================
      // SUNSET
      // 2:17 → 3:53
      // ================================

      else if (currentTime < 234) {

        progress.classList.add(
          "world-sunset"
        );

      }

      // ================================
      // NIGHT
      // 3:54 → END
      // ================================

      else {

        progress.classList.add(
          "world-night"
        );

      }

    }

    // ================================
    // CRISIS CITY TRANSITIONS
    // ================================

    if (
      audio.src.includes(
        "crisiscity"
      )
    ) {

      progress.classList.remove(
        "crisis-flames",
        "crisis-skyscraper",
        "crisis-whirlwind",
        "crisis-tornado"
      );

      // THE FLAMES
      if (currentTime < 86) {

        progress.classList.add(
          "crisis-flames"
        );

      }

      // SKYSCRAPER
      else if (currentTime < 204) {

        progress.classList.add(
          "crisis-skyscraper"
        );

      }

      // WHIRLWIND
      else if (currentTime < 300) {

        progress.classList.add(
          "crisis-whirlwind"
        );

      }

      // THE TORNADO
      else {

        progress.classList.add(
          "crisis-tornado"
        );

      }

    }

  }
);

// ================================
// SET PROGRESS
// ================================

function setProgressPosition(
  clientX,
  updateAudio = true
) {
  const rect =
    progressContainer.getBoundingClientRect();

  let offsetX =
    clientX - rect.left;

  offsetX = Math.max(
    0,
    Math.min(offsetX, rect.width)
  );

  const percent =
    (offsetX / rect.width) * 100;

  dragPercent = percent;

  progress.style.width =
    `${percent}%`;

  if (
    audio.duration &&
    updateAudio
  ) {
    audio.currentTime =
      (percent / 100) *
      audio.duration;
  }
}

function checkTitleOverflow() {
  trackTitle.classList.remove("scrolling");
  void trackTitle.offsetWidth;

  const wrapper = trackTitle.parentElement;
  if (!wrapper) return;

  const availableWidth = wrapper.clientWidth;
  const textWidth = trackTitle.scrollWidth;

  if (textWidth > availableWidth) {
    trackTitle.classList.add("scrolling");
  }
}

// ================================
// DESKTOP DRAG
// ================================

progressContainer.addEventListener(
  "mousedown",
  (e) => {
    isDraggingProgress = true;

    setProgressPosition(
      e.clientX,
      false
    );
  }
);

document.addEventListener(
  "mousemove",
  (e) => {
    if (!isDraggingProgress)
      return;

    if (rafId) return;

    rafId =
      requestAnimationFrame(() => {
        setProgressPosition(
          e.clientX,
          false
        );

        rafId = null;
      });
  }
);

document.addEventListener(
  "mouseup",
  (e) => {
    if (!isDraggingProgress)
      return;

    setProgressPosition(
      e.clientX,
      true
    );

    isDraggingProgress = false;
  }
);

// ================================
// MOBILE DRAG
// ================================

progressContainer.addEventListener(
  "touchstart",
  (e) => {
    isDraggingProgress = true;

    setProgressPosition(
      e.touches[0].clientX,
      false
    );
  }
);

document.addEventListener(
  "touchmove",
  (e) => {
    if (!isDraggingProgress)
      return;

    if (rafId) return;

    rafId =
      requestAnimationFrame(() => {
        setProgressPosition(
          e.touches[0].clientX,
          false
        );

        rafId = null;
      });
  }
);

document.addEventListener(
  "touchend",
  (e) => {
    if (!isDraggingProgress)
      return;

    const touch =
      e.changedTouches[0];

    setProgressPosition(
      touch.clientX,
      true
    );

    isDraggingProgress = false;
  }
);

// ================================
// VOLUME
// ================================

if (volumeSlider) {
  volumeSlider.addEventListener(
    "input",
    () => {
      audio.volume =
        volumeSlider.value;

      saveSettings();
    }
  );
}

// ================================
// TECLADO
// ================================

document.addEventListener(
  "keydown",
  (e) => {
    // evita conflito em inputs
    const tag =
      document.activeElement.tagName;

    if (
      tag === "INPUT" ||
      tag === "TEXTAREA"
    ) {
      return;
    }

    if (e.code === "ArrowRight") {
      audio.currentTime += 5;
    }

    if (e.code === "ArrowLeft") {
      audio.currentTime -= 5;
    }

    if (e.code === "Space") {
      e.preventDefault();

      audio.paused
        ? playTrack()
        : pauseTrack();
    }
  }
);

// ================================
// FORMATAR TEMPO
// ================================

function formatTime(time) {
  const minutes = Math.floor(
    time / 60
  );

  const seconds = Math.floor(
    time % 60
  );

  return (
    minutes +
    ":" +
    (seconds < 10
      ? "0" + seconds
      : seconds)
  );
}

// ================================
// ACCORDION MULTI-NÍVEL
// ================================

document
  .querySelectorAll(
    ".collection-title"
  )
  .forEach((title) => {
    title.addEventListener(
      "click",
      () => {
        document
          .querySelectorAll(
            ".collection-content"
          )
          .forEach((content) => {
            if (
              content !==
              title.nextElementSibling
            ) {
              content.classList.remove(
                "open"
              );
            }
          });

        title.nextElementSibling.classList.toggle(
          "open"
        );
      }
    );
  });

document
  .querySelectorAll(".disc-title")
  .forEach((title) => {
    title.addEventListener(
      "click",
      () => {
        const parent =
          title.closest(
            ".collection-content"
          );

        parent
          .querySelectorAll(
            ".disc-content"
          )
          .forEach((content) => {
            if (
              content !==
              title.nextElementSibling
            ) {
              content.classList.remove(
                "open"
              );
            }
          });

        title.nextElementSibling.classList.toggle(
          "open"
        );
      }
    );
  });

document
  .querySelectorAll(".game-title")
  .forEach((title) => {
    title.addEventListener("click", () => {

      const tracksEl = title.nextElementSibling;
      const parent = title.closest(".disc-content");

      // fecha outros
      parent.querySelectorAll(".tracks").forEach((el) => {
        if (el !== tracksEl) {
          el.style.maxHeight = "0px";
          el.classList.remove("open");
        }
      });

      // se já estiver aberto → fechar
      if (tracksEl.classList.contains("open")) {

        tracksEl.style.maxHeight = tracksEl.scrollHeight + "px";

        requestAnimationFrame(() => {
          tracksEl.style.maxHeight = "0px";
        });

        tracksEl.classList.remove("open");

      } else {

        tracksEl.classList.add("open");

        // força cálculo antes de animar
        tracksEl.style.maxHeight = tracksEl.scrollHeight + "px";

      }

    });
  });

document
  .querySelectorAll(
    ".subgame-title"
  )
  .forEach((title) => {
    title.addEventListener(
      "click",
      () => {
        const parent =
          title.closest(".tracks");

        parent
          .querySelectorAll(
            ".subtracks"
          )
          .forEach((subtracks) => {
            if (
              subtracks !==
              title.nextElementSibling
            ) {
              subtracks.classList.remove(
                "open"
              );
            }
          });

        title.nextElementSibling.classList.toggle(
          "open"
        );
        const parentTracks =
          title.closest(".tracks");

        requestAnimationFrame(() => {
          parentTracks.style.maxHeight =
            parentTracks.scrollHeight + "px";
        });
      }
    );
  });

// ================================
// SETTINGS
// ================================

if (
  settingsToggle &&
  settingsPanel
) {
  settingsToggle.addEventListener(
    "click",
    () => {
      settingsPanel.classList.toggle(
        "open"
      );
    }
  );
}

if (darkModeToggle) {

  darkModeToggle.addEventListener(
    "change",
    () => {

      if (
        document.body.classList.contains(
          "oled-mode"
        )
      ) {
        darkModeToggle.checked = false;
        return;
      }

      document.body.classList.toggle(
        "dark-mode",
        darkModeToggle.checked
      );

      updateLogo();

      saveSettings();

    }
  );

}

oledModeToggle.addEventListener(
  "change",
  () => {

    document.body.classList.toggle(
      "oled-mode",
      oledModeToggle.checked
    );

    if (oledModeToggle.checked) {

      darkModeToggle.checked = false;

      document.body.classList.remove(
        "dark-mode"
      );

    }

    saveSettings();

  }
);

if (layoutToggle) {
  layoutToggle.addEventListener("change", () => {

    player.classList.toggle(
      "horizontal",
      layoutToggle.checked
    );

    playerColumn.classList.toggle(
      "horizontal-layout",
      layoutToggle.checked
    );

    radioLayout.classList.toggle(
      "horizontal-layout",
      layoutToggle.checked
    );

    settingsPanel.classList.toggle(
      "horizontal-mode",
      layoutToggle.checked
    );

    // NOVO
    if (layoutToggle.checked) {

      infoBox.classList.add(
        "hidden-horizontal"
      );

    } else {

      infoBox.classList.remove(
        "hidden-horizontal"
      );

    }

    setTimeout(checkTitleOverflow, 350);

    saveSettings();

  });
}
// ================================
// RESIZE CHECK (overflow)
// ================================

window.addEventListener("resize", () => {
  checkTitleOverflow();
});

// ================================
// INICIAR
// ================================

audio.volume = 0.5;

if (volumeSlider) {
  volumeSlider.value = 0.5;
}

loadSettings();

if (isRandom) {

  const activeTracks = getActiveTracks();

  if (activeTracks.length > 0) {

    const randomTrack =
      activeTracks[
      Math.floor(
        Math.random() *
        activeTracks.length
      )
      ];

    currentIndex =
      tracks.indexOf(randomTrack);

  }

}

loadTrack(currentIndex);

setTimeout(
  checkTitleOverflow,
  200
);
