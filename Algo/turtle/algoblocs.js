// Serie A
/*
//A1 initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(10);
//A1 réalisation
forward(200);
faceRight();
forward(100);

//A2 initialisation
setPos(300,300);
faceLeft();
changeColor(color.green);
setLineWidth(10);
//A2 Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

// A3 initialisation
setPos(300,300);
faceLeft();
changeColor(color.red);
setLineWidth(10);
//A3 réalistation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown();
forward(100);
faceUp();
forward(200);

//A4 initialisation
setPos(100,500);
faceRight();
changeColor(color.red);
setLineWidth(10);
//A4 réalisation
forward(200);
arcLeft(90,180);
forward(100);
arcRight(90,180);
forward(200);

//A5 initialisation
setPos(300,100);
faceRight();
changeColor(color.red);
setLineWidth(10);
//A5 réalisation
arcRight(150,360);
arcRight(75,180);
arcLeft(75,180);

//A6 initialisation
setPos(300,300);
faceUp();
changeColor(color.red);
setLineWidth(10);
// A6 réalisation
forward(100);
up();
forward(100);
down();
forward(100);

//B2 INITALISATION
setPos(100,300);
faceUp();
changeColor(color.red);
setLineWidth(10);
//B2 répétition
for (let i=0 ; i<4 ; i++) {
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}

//B3 initialisation
setPos(150,150);
faceRight();
changeColor(color.red);
setLineWidth(10);
//B3 réalisation
for (let i=0 ; i<4 ; i++) {
    forward(200);
    right(90);
}

//B7 initialisation
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);
//B7 réalisation
for (let i=0 ; i<3 ; i++) {
    forward(100);
    left(120);
}
for (let i=0 ; i<4 ; i++) {
    forward(100);
    right(90);
}

//B8 initialisation
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);
//B8 realisation
for (let i=0 ; i<8 ; i++) {
    forward(250)
    right(135);
}

// B10 initialisation
setPos(100,300)
faceRight();
changeColor(color.red)
setLineWidth(10);
//B10 réalisation
for (let i=0 ; i<8 ; i++) {
    forward(100);
    right(135);
}
up();
changeColor(color.yellow);
forward(200),
down()
for (let i=0 ; i<8 ; i++) {
    forward(150);
    right(135);
}
up();
changeColor(color.blue);
right(90);
forward(100);
down();
for (let i=0 ; i<8 ; i++) {
    forward(200);
    right(135);
}

//B19 initialisation
setPos(300,500);
faceRight();
changeColor(color.red);
setLineWidth(10);

//B19 réalisation
for (let i=0 ; i<4 ; i++) {
    arcLeft(50,180);
    faceRight();
}
up();
arcLeft(25,180);
down();
for (let i=0 ; i<4 ; i++) {
    arcLeft(50,180);
    faceLeft();
}

//B20 Initialisation
setPos(150,250);
faceDown();
changeColor(color.red);
setLineWidth(10);

//B20 Réalisation
for (let i=0 ; i<2 ; i++) {
    forward(50);
    arcLeft(50,90);
}
forward(100);
for (let i=0 ; i<2 ; i++) {
    arcLeft(50,90);
    forward(50);
}
forward(-10);
faceRight();
forward(150);
up();
faceLeft();
forward(75);
faceDown();
forward(25);
down();
faceLeft();
arcLeft(25,360);

//C1 initialisation
setPos(100,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

//C1 Réalisation
for (let i=0 ; i<4 ; i++) {
    for (let j=0 ; j<3 ; j++) {
        forward(100);
        right(120);
    }
    forward(100);
}

//C4 initialisation
setPos(50,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

//C4 réalisation
for (let i=0 ; i<5 ; i++) {
    for (let j=0 ; j<3 ; j++) {
        forward(50);
        left(120);
    }
    for (let k=0 ; k<4 ; k++) {
        changeColor(color.yellow);
        forward(50);
        right(90);
    }
    up()
    forward(100);
    down();
    changeColor(color.red);
}

//C5 Initialisation
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

//C5 Réalisation
for (let i=0 ; i<4 ; i++) {
    for (let j=0 ; j<8 ; j++) {
        forward(200);
        left(135);
    }
    right(90);
    shiftColor(0.25);
}

//D10 Initialisation
setPos(300,300);
faceRight();
changeColor(color.green);
setLineWidth(10);

//D10 Réalisation
let longeur = 50
for (let i=0 ; i<10 ; i++) {
    forward(longeur);
    right(90);
    longeur = longeur + 25;
}

//D11 initialisation
setPos(50,200);
faceRight();
changeColor(color.red);
setLineWidth(10);

//D11 Réalisation
let longueur = 125;
for (let i=0 ; i<5 ; i++) {
    for (let j =0 ; j<4 ; j++) {
        forward(longueur);
        left(120);
    }
    right(120);
    longueur = longueur - 25;
}
*/
// D12 Initialisation
setPos(300,350);
faceRight();
changeColor(color.red);
setLineWidth(10);

//D12 Réalisation
let longueur = 50;
for (let i=0 ; i<6 ; i++) {
    for (let j=0 ; j<4 ; j++) {
        forward(longueur);
        left(120);
    }
    right(60);
    longueur = longueur + 25;
}