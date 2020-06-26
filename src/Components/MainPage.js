import React from 'react';
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic1.jpg'
import pic8 from '../images/pic2.jpg'
import pic9 from '../images/pic3.jpg'
import pic10 from '../images/pic4.jpg'
import pic11 from '../images/pic5.jpg'
import pic12 from '../images/pic6.jpg'
import Cards from './Cards'


export default class MainPage extends React.Component{

  render()
  {

    let images=[
      {
        id:1,
        name:"Batman",
        image:pic1,
        brand:"DC",
        rating:4,
        likes:1,
        featured: true,
        description: "Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger and first appeared in Detective Comics #27 in 1939. The character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective. Batman's secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. Batman operates in the fictional Gotham City"
      },
      {
        id:2,
        name:"Superman",
        image:pic2,
        brand:"Marvel",
        rating:2,
        likes:9,
        featured: false,
        description: "Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in Action Comics #1, a comic book published on April 18, 1938. The character regularly appears in comic books published by DC Comics, and has been adapted to a number of radio serials, movies, and television shows. Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His foster parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime as a vigilante."
      },
      {
        id:3,
        name:"Hulk",
        image:pic3,
        brand:"Marvel",
        rating:3,
        likes:2,
        featured: true,
        description: "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other. Commonly portrayed as a raging savage, the Hulk has been represented with other personalities based on Banner's fractured psyche, from a mindless, destructive force, to a brilliant warrior, or genius scientist in his own right. Despite both Hulk and Banner's desire for solitude."
      },
      {
        id:4,
        image:pic4,
        name:"Captain America",
        brand:"Marvel",
        rating:1,
        likes:6,
        featured: false,
        description: "Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication."
      },
      {
        id:5,
        name:"Groot",
        image:pic5,
        brand:"Marvel",
        rating:5,
        likes:8,
        featured: true,
        description: "Groot is an extraterrestrial tree monster who initially came to Earth seeking humans to capture and study. Groot was seemingly destroyed by termites used by Leslie Evans. Xemnu made a duplicate of Groot by making a human and tree hybrid that was used to fight the Hulk, but it was destroyed in the battle. Groot was later revealed to have survived, but was a captive of the Collector and held in his zoo in Canada until Groot and the other captive creatures were freed by the Mole Man. Groot and the other creatures rampaged in New York City until they were stopped by a band of superheroes, and were then dumped through a portal to the Negative Zone. Groot was later tracked down and captured by S.H.I.E.L.D.'s Paranormal Containment Unit, nicknamed the Howling Commandos, when his tree scent was detected by Sasquatch and Abominable Snowman."
      },
      {
        id:6,
        name:"IronMan",
        image:pic6,
        brand:"Marvel",
        rating:4,
        likes:6,
        featured: false,
        description: "Iron Man is a American superhero based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe. It was directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, and stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man."
      },
      {
        id:7,
        name:"Batman",
        image:pic7,
        brand:"DC",
        rating:3,
        likes:1,
        featured: true,
        description: "Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger and first appeared in Detective Comics #27 in 1939. The character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective. Batman's secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. Batman operates in the fictional Gotham City"
      },
      {
        id:8,
        name:"Superman",
        image:pic8,
        brand:"Marvel",
        rating:2,
        likes:9,
        featured: false,
        description: "Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in Action Comics #1, a comic book published on April 18, 1938. The character regularly appears in comic books published by DC Comics, and has been adapted to a number of radio serials, movies, and television shows. Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His foster parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime as a vigilante."
      },
      {
        id:9,
        name:"Hulk",
        image:pic9,
        brand:"Marvel",
        rating:1,
        likes:2,
        featured: true,
        description: "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other. Commonly portrayed as a raging savage, the Hulk has been represented with other personalities based on Banner's fractured psyche, from a mindless, destructive force, to a brilliant warrior, or genius scientist in his own right. Despite both Hulk and Banner's desire for solitude."
      },
      {
        id:10,
        name:"Captain America",
        image:pic10,
        brand:"Marvel",
        rating:5,
        likes:6,
        featured: false,
        description: "Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication."
      },
      {
        id:11,
        name:"Groot",
        image:pic11,
        brand:"Marvel",
        rating:4,
        likes:8,
        featured: true,
        description: "Groot is an extraterrestrial tree monster who initially came to Earth seeking humans to capture and study. Groot was seemingly destroyed by termites used by Leslie Evans. Xemnu made a duplicate of Groot by making a human and tree hybrid that was used to fight the Hulk, but it was destroyed in the battle. Groot was later revealed to have survived, but was a captive of the Collector and held in his zoo in Canada until Groot and the other captive creatures were freed by the Mole Man. Groot and the other creatures rampaged in New York City until they were stopped by a band of superheroes, and were then dumped through a portal to the Negative Zone. Groot was later tracked down and captured by S.H.I.E.L.D.'s Paranormal Containment Unit, nicknamed the Howling Commandos, when his tree scent was detected by Sasquatch and Abominable Snowman."
      },
      {
        id:12,
        name:"IronMan",
        image:pic12,
        brand:"Marvel",
        rating:3,
        likes:6,
        featured: false,
        description: "Iron Man is a American superhero based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe. It was directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, and stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man."
      },
      {
        id:13,
        name:"Batman",
        image:pic1,
        brand:"DC",
        rating:2,
        likes:1,
        featured: true,
        description: "Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger and first appeared in Detective Comics #27 in 1939. The character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective. Batman's secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. Batman operates in the fictional Gotham City"
      },
      {
        id:14,
        name:"Superman",
        image:pic2,
        brand:"Marvel",
        rating:5,
        likes:9,
        featured: false,
        description: "Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in Action Comics #1, a comic book published on April 18, 1938. The character regularly appears in comic books published by DC Comics, and has been adapted to a number of radio serials, movies, and television shows. Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His foster parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime as a vigilante."
      },
      {
        id:15,
        name:"Hulk",
        image:pic3,
        brand:"Marvel",
        rating:1,
        likes:2,
        featured: true,
        description: "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other. Commonly portrayed as a raging savage, the Hulk has been represented with other personalities based on Banner's fractured psyche, from a mindless, destructive force, to a brilliant warrior, or genius scientist in his own right. Despite both Hulk and Banner's desire for solitude."
      },
      {
        id:16,
        image:pic4,
        name:"Captain America",
        brand:"Marvel",
        rating:3,
        likes:6,
        featured: false,
        description: "Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication."
      }
    ]

    console.log(images)

    return(
        <Cards images={images}/>
    )

  }
}

