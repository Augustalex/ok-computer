#!/usr/bin/env node

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const titles = Object.keys(SONGS);
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  res.end(`${SONGS[randomTitle]}\n\n"${randomTitle}" by Radiohead\n`);
});

const portArg = process.argv[2];
const port = portArg ? parseInt(portArg) : 3000;

server.listen(port, 'localhost', () => {
  console.log(`Server running at http://localhost:${port}`);
});


const SONGS = {
  "Airbag": `In the next world war
A jackknifed juggernaut
I am born again
In the neon sign
Scrolling up and down
I am born again

In an interstellar burst
I am back to save the universe

In a deep deep sleep
Of the innocent
I am born again
In a fast German car
I'm amazed that I survived
An airbag saved my life

In an interstellar burst
I am back to save the universe

In an interstellar burst
I am back to save the universe

In an interstellar burst
I am back to save the universe`,

  "Paranoid Android": `Please could you stop the noise, I'm trying to get some rest
From all the unborn chicken voices in my head
What's that?
What's that?

When I am king you will be first against the wall
With your opinion which is of no consequence at all
What's that?
What's that?

Ambition makes you look pretty ugly
Kicking and squealing gucci little piggy
You don't remember
You don't remember
Why don't you remember my name?
Off with his head, man
Off with his head, man
Why don't you remember my name?
I guess he does

Rain down
Rain down
Come on rain down
On me
From a great height
From a great height
Height
Height

That's it sir (Rain down)
You're leaving
The crackle of pig skin (Rain down)
The dust and the screaming (Come on rain down on me)
The yuppies networking
The panic, the vomit (from a great height)
The panic, the vomit (from a great height)
God loves his children`,

  "Subterranean Homesick Alien": `The breath of the morning
I keep forgetting
The smell of the warm summer air
I live in a town where you can't smell a thing
You watch your feet for cracks in the pavement
And up above aliens hover making home movies for the folks back home
Of all these weird creatures who lock up their spirits
Drill holes in themselves and live for their secrets

They're all uptight
Uptight
Uptight
Uptight
Uptight
Uptight

I wish that they'd swoop down in a country lane
Late at night when I'm driving
Take me onboard that beautiful ship
Show me the worlds I'd love to see
I'd tell all my friends but they never believe me
They'd think that I've finally lost it completely
I show them the stars and the meaning of life, they'd shut me away but I'd be all right all right

I'm just uptight
Uptight
Uptight
Uptight
Uptight
Uptight
Uptight
Uptight`,
  "Exit Music (for a Film)": `Wake
From your sleep
The drying of your tears
Today we escape
We escape
Pack
And get dressed
Before your father hears us
Before all hell breaks loose

Breathe, keep breathing
Don't lose your nerve
Breathe, keep breathing
I can't do this alone
Sing us a song, a song to keep us warm
There's such a chill, such a chill

And You can laugh
A spineless laugh
We hope your rules and wisdom choke you
And now we are one
In everlasting peace
We hope that you choke, that you choke
We hope that you choke, that you choke
We hope that you choke, that you choke`,

  "Let Down": `Transport
Motorways and tram lines
Starting and then stopping
Taking off and landing
The emptiest of feelings
Disappointed people
Clinging onto bottles
And when it comes its so so disappointing
Let down and hanging around
Crushed like a bug in the ground
Let down and hanging around

Shell smashed
Juices flowing
Wings twitch legs are going
Don't get sentimental
It always ends up drivel
One day I'm going to grow wings
A chemical reaction
Hysterical and useless
Hysterical and

Let down and hanging around
Crushed like a bug in the ground
Let down and hanging around

You know where you are with
You know where you are with
Floor collapses
Floating
Bouncing back and one day I am gonna grow wings
A chemical reaction
Hysterical and useless
Hysterical and

Let down and hanging around
Crushed like a bug in the ground
Let down and hanging around`,

  "Karma Police": `Karma police
Arrest this man
He talks in maths
He buzzes like a fridge
He's like a detuned radio
Karma police
Arrest this girl
Her hitler hairdo
Is making me feel ill
And we have crashed her party

This is what you get
This is what you get
This is what you get
When you mess with us
Karma police

I've given all I can
It's not enough
I've given all i can
But we're still on the payroll

This is what you get
This is what you get
This is what you get
When you mess with us

For a minute there
I lost myself
I lost myself
Phew, for a minute there
I lost myself
I lost myself
I lost myself
I lost myself
I lost myself
I lost myself`,

  "Fitter Happier": `Fitter
Happier
More productive
Comfortable
Not drinking too much
Regular exercise at the gym (3 days a week)
Getting on better with your associate employee contemporaries
At ease
Eating well (no more microwave dinners and saturated fats)
A patient better driver
A safer car (baby smiling in back seat)
Sleeping well (no bad dreams)
No paranoia
Careful to all animals (never washing spiders down the plughole)
Keep in contact with old friends (enjoy a drink now and then)
Will frequently check credit at (moral) bank (hole in wall)
Favors for favors
Fond but not in love
Charity standing orders
On sundays ring road supermarket
(No killing moths or putting boiling water on the ants)
Car wash (also on sundays)
No longer afraid of the dark
Or midday shadows
Nothing so ridiculously teenage and desperate
Nothing so childish
At a better pace
Slower and more calculated
No chance of escape
Now self-employed
Concerned (but powerless)
An empowered and informed member of society (pragmatism not idealism)
Will not cry in public
Less hance of illness
Tires that grip in the wet (shot of baby strapped in back seat)
A good memory
Still cries at a good film
Still kisses with saliva
No longer empty and frantic
Like a cat
Tied to a stick
That's driven into frozen winter shit (the ability to laugh at weakness)
Calm
Fitter, healthier and more productive
A pig
In a cage
On antibiotics`,

  "Electioneering": `I will stop
I will stop at nothing
Say the right things
When electioneering
I trust I can rely on your vote

when I go forwards, you go backwards
And somewhere we will meet
when I go forwards, you go backwards
And somewhere we will meet

Riot shields
Voodoo economics (bloodshed, bloodshed)
It's just business
Cattle prods and the IMF
I trust I can rely on your vote

when I go forwards, you go backwards
And somewhere we will meet
when I go forwards, you go backwards
And somewhere we will meet`,

  "Climbing Up the Walls": `I am the key to the lock in your house
That keeps your toys in the basement
And if you get too far inside
You'll only see my reflection
It's always best when the light is off
I am the pick in the ice
Do not cry out or hit the alarm
You know we're friends 'til we die

And either way you turn
I'll be there
Open up your skull
I'll be there
Climbing up the walls

It's always best when the light is off
It's always better on the outside
Fifteen blows to the back of your head
Fifteen blows to your mind
So lock the kids up safe tonight
Shut the eyes in the cupboard
I got the smell of a local man
Who's got the loneliest feeling

That either way he turns
I'll be there
Open up your skull
I'll be there
Climbing up the walls
Climbing up the walls
Climbing up the walls`,

  "No Surprises": `A heart that's full up like
A landfill
A job that slowly kills you
Bruises that won't heal

I'll take a quiet life
And a handshake of carbon monoxide

And no alarms and no surprises
No alarms and no surprises
No alarms and no surprises
Silent
Silence

This is my final fit
My final bellyache with

No alarms and no surprises
No alarms and no surprises
No alarms and no surprises please

Such a pretty house and
Such a pretty garden

No alarms and no surprises
No alarms and no surprises
No alarms and no surprises please`,

  "Lucky": `I'm on a roll
I'm on a roll
This time
I feel my luck could change
Kill my Sarah
Kill me again
With love
It's gonna be a glorious day

Pull me out of the aircrash
Pull me out of the lake
I'm your superhero
We are standing on the edge

The head of state
Has called for me by name
But I don't have time for him
It's gonna be a glorious day
I feel my luck could change

Pull me out of the aircrash
Pull me out of the lake
I'm your superhero
We are standing on the edge

We are standing on the edge`,

  "The Tourist": `It barks at no else but me
Like it's seen a ghost
I guess it seen the sparks a-flowing
No one else would know

Hey man, slow down
Slow down
Idiot, slow down
Slow down

Sometimes I get overcharged
That's when you see sparks
You ask me where the hell i'm going?
At a thousand feet per second

Hey man, slow down
Slow down
Idiot, slow down
slow down
Hey man, slow down
Slow down
Idiot, slow down
slow down`
}