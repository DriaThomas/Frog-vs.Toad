// class Player extends Component {
//     constructor(classGame, x, y, w, h, imageSrc) {
//       super(classGame, x, y, w, h, imageSrc);

//       this.immunity = false;
//       this.lives = 3;
//     }
// }
const elem = document.getElementById('myCanvas');
const context = elem.getContext('2d');
// const img = document.getElementById('img');

let interval = 60;
let score = 0;
function pushfrog() {


  elemLeft = elem.offsetLeft + elem.clientLeft,
    elemTop = elem.offsetTop + elem.clientTop,

    elements = [];

  // Add event listener for `click` events.
  elem.addEventListener('click', function (event) {
    var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;


    // Collision detection between clicked offset and element.
    elements.forEach(function (element) {
      if (y > element.top && y < element.top + element.height
        && x > element.left && x < element.left + element.width) {
        score++;
        console.log(`score ${score}`);
      }
    });

  }, false);

  // Add element.

  elements.push({

    top: 40,
    left: 20

  });
  elements.push({

    // top: 150,
    // left: 250
    top: 250,
    left: 150
  });
  elements.push({

    colour: 'blue',
    // top: 150,
    // left: 350
    top: 350,
    left: 150
  });
  elements.push({
    colour: 'blue',
    // top: 265,
    // left: 150
    top: 150,
    left: 265
  });
  elements.push({
    colour: 'blue',
    // top: 265,
    // left: 250
    top: 250,
    left: 265
  });
  elements.push({

    colour: 'blue',
    // top: 265,
    // left: 350
    top: 350,
    left: 265
  });
  elements.push({
    colour: 'blue',
    // top: 20,
    // left: 150
    top: 150,
    left: 20
  });
  elements.push({

    colour: 'blue',
    // top: 20,
    // left: 250
    top: 250,
    left: 20
  });
  elements.push({

    colour: 'blue',
    // top: 20,
    // left: 350
    top: 350,
    left: 20
  });
  elements.push({


    colour: 'blue',
    // top: 375,
    // left: 150
    top: 150,
    left: 375
  });
  elements.push({

    colour: 'blue',
    // top: 375,
    // left: 250
    top: 250,
    left: 375
  });
  elements.push({



    // top: 375,
    // left: 350
    top: 350,
    left: 375
  });
  // top: [150, 265, 20, 375],
  //     // left: [150, 250, 350],
  // Render elements.


  // const frogs = document.getElementById('img');
  elements.forEach(function (element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, 70, 70);
  });




}
pushfrog()

elements.push({

  top: 150,
  left: 150

});
elements.push({

  // top: 150,
  // left: 250
  top: 250,
  left: 150
});
elements.push({

  colour: 'blue',
  // top: 150,
  // left: 350
  top: 350,
  left: 150
});
elements.push({
  colour: 'blue',
  // top: 265,
  // left: 150
  top: 150,
  left: 265
});
elements.push({
  colour: 'blue',
  // top: 265,
  // left: 250
  top: 250,
  left: 265
});
elements.push({

  colour: 'blue',
  // top: 265,
  // left: 350
  top: 350,
  left: 265
});
elements.push({
  colour: 'blue',
  // top: 20,
  // left: 150
  top: 150,
  left: 20
});
elements.push({

  colour: 'blue',
  // top: 20,
  // left: 250
  top: 250,
  left: 20
});
elements.push({

  colour: 'blue',
  // top: 20,
  // left: 350
  top: 350,
  left: 20
});
elements.push({


  colour: 'blue',
  // top: 375,
  // left: 150
  top: 150,
  left: 375
});
elements.push({

  colour: 'blue',
  // top: 375,
  // left: 250
  top: 250,
  left: 375
});
elements.push({



  // top: 375,
  // left: 350
  top: 350,
  left: 375
});