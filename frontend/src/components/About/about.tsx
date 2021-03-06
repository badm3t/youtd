import React from "react";
import Section from "../Section";
import "./style.scss";

const About = () => (
  <Section className="about" caption="About YouTD">
    <p className="intro">
      YouTD was ctreated by geX how a custom map for warcraft 3 TFT.
      This is the most sophisticated Tower Defence.
      The special thind about YouTD is that YOU will have the chance to take part in its creation!
      With a special Development KIT you can create unique towers or items.
      There, people will discuss your tower/item and if they (and especially the admins) like it,
      your tower/item will be put in the next version of YouTD.
      In YouTD, towers can level up like heroes.
      They start at level 0 and can get up to level 25. Every tower has own uqniue abilities.
    </p>
    <article className="game-elements">
      <h2 className="game-elements__title">Game Elements</h2>
      <p>
        Towers are devided in seven categories. They are fire, ice, storm, iron, nature, astral,
        darkness. So if you want to design a tower, you have to
        choose to which category it belongs to.
        The categories have different attack types, appearances and preferred special abilities.
      </p>
      <p>Here is a short description of the elements:</p>
      <ul className="game-elements category-list">
        <li className="category-list__item">
          <span className="fire">Fire: </span>
          The element of destruction. Fire towers set their focus on pure damage.
          They have good high damage and splash damage towers but lack special abilities,
          all they do is damage.
          Fire towers look fiery, red and contain red units like fel orcs and other red stuff.
        </li>
        <li className="category-list__item">
          <span className="nature">Nature: </span>
          The element of life. Nature towers focus on supportive effects that enhance other towers.
          Nature towers look like plants. They can contain animals and night elves.
        </li>
        <li className="category-list__item">
          <span className="darkness">Darkness: </span>
          The "evil" element. Focusses on curses, necromantism and generally abilities that weaken
           the enemy. Darkness towers look very dark, surrounded by skulls, bones and bodies.
            They can contain undead units and demons.
        </li>
        <li className="category-list__item">
          <span className="astral">Astral: </span>
          As opposed to darkness, this is the "good" element.
           It focusses on astral stuff (starfall, moon/sun beams, and so on) and positive effects.
            Its towers look like shiny ancient ruins. They can contain blood elfs.
        </li>
        <li className="category-list__item">
          <span className="iron">Iron: </span>
          The manmade element. It consists of towers and machines made by humans.
           It has alround abilities but lacks of great magic.
            Its towers look like real towers or machines.
             They can contain humans, dwarfs, goblins and other tinkering creatures.
        </li>
        <li className="category-list__item">
          <span className="storm">Storm: </span>
          The weather element. Focusses on weather effects like storms, tornados,
           fog and especially lightning. Its towers are surrounded by lightning and storm.
        </li>
        <li className="category-list__item">
          <span className="ice">Ice: </span>
          The opposite to fire.
          Uses slowing and drowning effects on enemies.
           Its towers look like the element itself: Icy, snowy, water and such stuff.
            They can contain northern creatures, water and frost elementals.
        </li>
      </ul>
    </article>
    <article className="game-rarity">
      <h2 className="game-rarity__title">A rarity in the Game</h2>
      <p>In YouTD there are next rarities for towers and items:</p>
      <ul className="rarities category-list">
        <li className="category-list__item">
          <span className="common">Common</span>
        </li>
        <li className="category-list__item">
          <span className="uncommon">Uncommon</span>
        </li>
        <li className="category-list__item">
          <span className="rare">Rare</span>
        </li>
        <li className="category-list__item">
          <span className="unique">Unique</span>
        </li>
      </ul>
    </article>
    <article className="creeps">
      <h2 className="creeps__title">Creeps or Enemies</h2>
      <p>
        Creeps in YouTD are sorted into categories and sizes.
        The categories, or races are the following:
      </p>
      <ul className="races category-list">
        <li className="category-list__item">
          <span className="magic">Magical</span>
        </li>
        <li className="category-list__item">
          <span className="astral">Humanoid</span>
        </li>
        <li className="category-list__item">
          <span className="decay">Undead</span>
        </li>
        <li className="category-list__item">
          <span className="fire">Orc</span>
        </li>
        <li className="category-list__item">
          <span className="nature">Nature</span>
        </li>
      </ul>
      <p>The sizes are:</p>
      <ul className="creep-size category-list">
        <li className="category-list__item">
          <span className="common">Mass </span>
          (small creeps where many spawn simultaneously)
        </li>
        <li className="category-list__item">
          <span className="common">Normal </span>
          (normal sized creeps where a moderate amount spawns)
        </li>
        <li className="category-list__item">
          <span className="common">Champion </span>
          (champions are larger creeps that spawn together with normal creeps)
        </li>
        <li className="category-list__item">
          <span className="common">Boss </span>
          (boss creeps are really strong ones that spawn alone)
        </li>
        <li className="category-list__item">
          <span className="common">Air </span> (flying creeps)
        </li>
      </ul>
    </article>
  </Section>
);

export default About;
