const grind = 
`
<section id="grind">
      <h1>Grind</h1>
      <h2>TLDR: Big grind = slow brew, small grind = fast brew</h2>
      <p>
        To make the transfer of material efficient, a high surface area to volume ratio is required.
        Think of a warehouse. 
        A big warehouse with lots of space, but with no garage doors is a bad warehouse.
        A smaller warehouse with garage doors large enough for trucks to back up to is a good warehouse.
        The same can be said for volume and surface-area.
        To make the math simpler, let's use a cube. 
        Volume = S^3
        Surface-area = 6S^2
        The closer S is to zero, the larger the ratio of surface-area : volume.
        Therefore, if all other brewing variables are held constant, the changes to extraction are as follows:
        When grind-size is increased, less soluble material is extracted from the coffee.
        When grind-size is decreased, more soluble material is extractted from the coffee.
        If your coffee is too bitter, try increasing your grind size.
        If your coffee is sour, try decreasing your grind size.
      </p>
</section>
`
const dose = 
`
<section id="dose">
  <h1>Dose</h1>
  <h2>TLDR: more coffee -> stronger coffee</h2>
  <p>
    Although dose can be used to affect flavor, I don't recommend it. 
    A typical 12oz cup of coffee is dosed with around 20g of coffee.
    Whenever you play with dose, you play with how much caffeine you are ingesting.
    Both overcaffienation, and undercaffinnation can be a bad time.
    However, Increasing dose can increase resistance in a coffee filter, leading to more contact time with water,
    leading to more materials being extracted. 
    Increasing dose can also lead to a thicker cup of coffee, although if this is a problem for you I would recommend trying a french press.
    If your coffee is to thick, I recommend using a paper filter. There are many different filters on the market
    that differ in thickness, and how much oils and such they let through without affecting your caffeine.
    I advise you find a level of caffeine that you like,and stick with it. Change other variables for flavor adjustments.
  </p>
</section>
`
const time = 
`<section id="time">
<h1>Time</h1>
<h2>TLDR: More time = more extraction</h2>
<p>
  For percolation:
  In a drip machine, flow rate is usually fixed. This means that if you were to brew a pot
  instead of a single brew, there would be much more contact time with the water and ground coffee.
  To balance this change of brew time, increase your grind-size. With percolation, the longer it takes the bigger your grind should be.
  Think of espresso. It takes 30s and the grounds are almost a powder. Small time, small grind.
  For drip: big time, big grind.
</p>
<p>
  For Infusion:
  Making a good infusion brew is all about marrying your grind-size and time.
  If you dont feel like changing your grind and purging your grinder, you can just play with the time that you steep your coffee.
  And as you read in the TLDR, more time = more extraction.
</p>
</section>`
const temp = 
`
<section id="temperature">
  <h1>Temperature</h1>
  <h2>TLDR: More heat = more extraction</h2>
  <p>
    The temperature of water is indicitive of how much energy the water contains.
    The more energy available, the faster the water is able to dissolve solutes.
    Think about washing dishes. Do you use hot water, or cold water?
    Having inconsistent water temperature means inconsistent brews. 
    I recommend brewing at around 205 degrees faraihnheit, and an electric kettle makes hitting a consistent temperature incredibly easy.
  </p>
</section>
`
const ingredients = 
`
<section id="ingredients">
<header>
  <h1>ingredients</h1>
  <h2>TLDR: put good in, get good out</h2>
  <h3>Click buttons for more information</h3>
</header>
<div id="whole-bean">
  <h4><button>Whole-bean vs ground</button></h4>
  <figure><img src="IMAGES/wholebean v ground.png"></figure>
  <p>
    As soon as you grind coffee, you break apart the cells, exposing more surface area to air. &nbsp;
    This rapidly increases the oxidation rate of the coffee. &nbsp;
    After some time the coffee becomes stale, flat. &nbsp;
    Coffee is a fresh food, and sometimes we forget that. &nbsp;
    If possible, pick up a coffee grinder.&nbsp;
    A blade grinder can cost as low as $15, while a high quality domestic burr grinder averages $100.&nbsp;
    How much you invest into your experience is up to you.
  </p>
  <p>Buy fair trade locally roasted coffee! For ethical and flavor reasons!</p>
</div>
<div id="water">
  <h4><button>Water</button></h4>
  <figure><img src="IMAGES/filter.jpeg"></figure>
  <p>
    Using filtered water ensures that you aren't contaminating your brew with minerals that can negatively impact flavor.&nbsp;
    This is one of the secrets that cafes use to make better drip than you do at home.
  </p>
</div>
<div id="additives">
  <h4><button>Additives</button></h4>
  <figure><img src="IMAGES/resize.webp"></figure>
  <p>
    Cream, sugar, etc.&nbsp;
    If you have a good brewing set-up, often you don't need it -taste wise-.&nbsp;
    If you are sensitive to acidic foods, then milk or cream is definitely something you should add to your coffee.&nbsp;
    The basic dairy helps balance your tummy. &nbsp;
    I will recommend buying smaller quantities of milk/cream to ensure freshness at all times.&nbsp;
    If you don't like bitter things, adding sugar -or a sugar substitute- is not shameful.&nbsp;
    However, if your brew is unbearably bitter, you are probably doing something wrong. &nbsp;
    Pay attention to the recipes!
  </p>
</div>
</section>
`