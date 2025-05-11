const s1 = (p) => {
    let crateimg, stairsimg, doorsimg, windowimg, doorwayimg,floorimg, floorimg2;
    let crate, stairs, doors, windows, doorway, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, text1, switchimg, switch_;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');

        floorimg = p.loadImage('/assets/floor_E.png');
        floorimg2 = p.loadImage('/assets/floor_E_half.png');
    };

    p.setup = () => {
        p.createCanvas(740, 300);
        p.canvas.style.border = '3px solid rgb(21, 97, 109)'
        p.background(21, 97, 109);
        p.world.gravity.y = 10;

        floor = new p.Sprite(150,250,350,50);
        floor.collider = "static";
        floor.img = floorimg;
        floor.img.offset.x = 0;
        floor.img.offset.y = -10;
        floor.img.scale = 3;
        floor.layer = 2;

        floor2 = new p.Sprite(530,250,350,50);
        floor2.collider = "static";
        floor2.img = floorimg;
        floor2.layer = 2;

        floor6 = new p.Sprite(340,345,350,50);
        floor6.collider = "none";
        floor6.img = floorimg;
        floor6.layer = 1;

        floor7 = new p.Sprite(-40,345,350,50);
        floor7.collider = "none";
        floor7.img = floorimg;
        floor7.layer = 1;

        floor3 = new p.Sprite(339,172,350,50);
        floor3.collider = "none";
        floor3.img = floorimg2;
        floor3.img.scale = 3;
        floor3.layer = 1;

        floor4 = new p.Sprite(-40,172,350,50);
        floor4.collider = "none";
        floor4.img = floorimg2;
        floor4.layer = 1;

        floor5 = new p.Sprite(718,172,350,50);
        floor5.collider = "none";
        floor5.img = floorimg2;
        floor5.layer = 1;

        floor8 = new p.Sprite(700,300,350,50);
        floor8.collider = "none";
        floor8.img = floorimg;
        floor8.layer = 1;
        
        let submit1 = document.getElementById('submit13.1');
        let submit2 = document.getElementById('submit13.2');
        let submit3 = document.getElementById('submit13.3');
        let submit4 = document.getElementById('submit13.4');
        let submit5 = document.getElementById('submit13.5');
        let submit6 = document.getElementById('submit13.6');
        let submit7 = document.getElementById('submit13.7');
        let submit8 = document.getElementById('submit13.8');
        let submit9 = document.getElementById('submit13.9');

        submit2.disabled = true;
        submit3.disabled = true;
        submit4.disabled = true;
        submit5.disabled = true;
        submit6.disabled = true;
        submit7.disabled = true;
        submit8.disabled = true;
        submit9.disabled = true;

        submit1.addEventListener('click', () => {
            let userAnswer = document.getElementById('input13.1').value.trim();
            userAnswer = userAnswer.replace(/\s+/g, '');
            if (crate) crate.remove();
            if (stairs) stairs.remove();
            if (doors) doors.remove();
            if (windows) windows.remove();
            if (doorway) doorway.remove();
            if (text1) text1.remove();
            if (switch_) switch_.remove();

            if (
                userAnswer === 'consttool=["crate","stairs","doors","window","doorway"];' ||
                userAnswer === "consttool=['crate','stairs','doors','window','doorway'];" 
            ) {
                text1 = new p.Sprite(370,60,150,150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;

                crate = new p.Sprite(80,0,130,60);
                crate.img = crateimg;
                crate.layer = 3;
                crate.img.scale = 2;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";

                doorway = new p.Sprite(665,20,110,15);
                doorway.img = doorwayimg;
                doorway.layer = 3;
                doorway.img.scale = 1.5;
                doorway.collider = "dynamic";
                response.innerHTML = "";
            submit2.disabled = false;
            } else {
                response.innerHTML = "Try Again!";
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                submit2.disabled = true;

            }
        });


        submit2.addEventListener('click', () => {
            let userAnswer2 = document.getElementById('input13.2').value.trim();
            userAnswer2 = userAnswer2.replace(/\s+/g, '');
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();

            if (
                userAnswer2 === 'tool.pop();'
            ) {
                text1 = new p.Sprite(370,60,150,150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;

                crate = new p.Sprite(80,0,130,60);
                crate.img = crateimg;
                crate.layer = 3;
                crate.img.scale = 2;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";

                submit3.disabled = false;

            } else {
                response.innerHTML = "Try Again!";
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                submit3.disabled = true;
            }
        });
        

        submit3.addEventListener('click', () => {
            let userAnswer3 = document.getElementById('input13.3').value.trim();
            userAnswer3 = userAnswer3.replace(/\s+/g, '');
            if (crate) crate.remove();
            if (stairs) stairs.remove();
            if (doors) doors.remove();
            if (windows) windows.remove();
            if (doorway) doorway.remove();
            if (text1) text1.remove();
            if (switch_) switch_.remove();

            if (
                userAnswer3 === 'tool.push("switch");' ||
                userAnswer3 === "tool.push('switch');"
            ) {
                text1 = new p.Sprite(370,60,150,150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;

                crate = new p.Sprite(80,0,130,60);
                crate.img = crateimg;
                crate.layer = 3;
                crate.img.scale = 2;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";

                switch_ = new p.Sprite(665,20,110,1);
                switch_.img = switchimg;
                switch_.layer = 3;
                switch_.img.scale = 2;
                switch_.collider = "dynamic";

                response.innerHTML = "";

                submit4.disabled = false;

            } else {
                response.innerHTML = "Try Again!";
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
                submit4.disabled = true;
            }
        });


        submit4.addEventListener('click', () => {
            let userAnswer4 = document.getElementById('input13.4').value.trim();
            userAnswer4 = userAnswer4.replace(/\s+/g, '');
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            if (
                userAnswer4 === 'tool.shift();'
            ) {
                text1 = new p.Sprite(370,60,150,150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;

                stairs = new p.Sprite(120, 0, 130, 75); 
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";

                doors = new p.Sprite(280, 0, 110, 100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";

                windows = new p.Sprite(410, 0, 110, 100); 
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";

                switch_ = new p.Sprite(535, 20, 110, 1);   
                switch_.img = switchimg;
                switch_.layer = 3;
                switch_.img.scale = 2;
                switch_.collider = "dynamic";

                submit5.disabled = false;

                response.innerHTML = "";
            } else {
                submit5.disabled = true;
                response.innerHTML = "Try Again!";
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            }
        });

        submit5.addEventListener('click', () => {
            let userAnswer5 = document.getElementById('input13.5').value.trim();
            userAnswer5 = userAnswer5.replace(/\s+/g, '');
        
            if (crate) crate.remove();
            if (stairs) stairs.remove();
            if (doors) doors.remove();
            if (windows) windows.remove();
            if (doorway) doorway.remove();
            if (text1) text1.remove();
            if (switch_) switch_.remove();
        
            if (
                userAnswer5 === 'tool.unshift("crate");' ||
                userAnswer5 === "tool.unshift('crate');"
            ) {
                text1 = new p.Sprite(370, 60, 150, 150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;
        
                crate = new p.Sprite(80, 0, 130, 60);
                crate.img = crateimg;
                crate.layer = 3;
                crate.img.scale = 2;
                crate.collider = "dynamic";
        
                stairs = new p.Sprite(250, 0, 130, 75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";
        
                doors = new p.Sprite(410, 0, 110, 100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";
        
                windows = new p.Sprite(540, 0, 110, 100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";
        
                switch_ = new p.Sprite(675, 20, 110, 1);
                switch_.img = switchimg;
                switch_.layer = 3;
                switch_.img.scale = 2;
                switch_.collider = "dynamic";
        
                response.innerHTML = '';
                submit6.disabled = false;
                
            } else {
                response.innerHTML = "Try Again!";
                submit6.disabled = true;
            }
        });

        submit6.addEventListener('click', () => {
            let userAnswer6 = document.getElementById('input13.6').value.trim();
            userAnswer6 = userAnswer6.replace(/\s+/g, '');
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            if (
                userAnswer6 === 'tool.pop();'
            ) {
                text1 = new p.Sprite(370,60,150,150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;

                crate = new p.Sprite(80,0,130,60);
                crate.img = crateimg;
                crate.layer = 3;
                crate.img.scale = 2;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";

                submit7.disabled = false;

                response.innerHTML = "";
            } else {
                response.innerHTML = "Try Again!";
                submit7.disabled = true;

                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            }
        });

        submit7.addEventListener('click', () => {
            let userAnswer7 = document.getElementById('input13.7').value.trim();
            userAnswer7 = userAnswer7.replace(/\s+/g, '');
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            if (
                userAnswer7 === 'tool.push("doorway");' ||
                userAnswer7 === "tool.push('doorway');"
            ) {
                text1 = new p.Sprite(370,60,150,150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;

                crate = new p.Sprite(80,0,130,60);
                crate.img = crateimg;
                crate.layer = 3;
                crate.img.scale = 2;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";

                doorway = new p.Sprite(665,20,110,15);
                doorway.img = doorwayimg;
                doorway.layer = 3;
                doorway.img.scale = 1.5;
                doorway.collider = "dynamic";

                submit8.disabled = false;

                response.innerHTML = "";
            } else {
                response.innerHTML = "Try Again!";
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
                submit8.disabled = true;
            }
        });


        submit8.addEventListener('click', () => {
            let userAnswer8 = document.getElementById('input13.8').value.trim();
            userAnswer8 = userAnswer8.replace(/\s+/g, '');
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            if (
                userAnswer8 === 'tool.sort();'
            ) {
                text1 = new p.Sprite(370,60,150,150);
                text1.collider = 'none';
                text1.text = "Tool";
                text1.textColor = p.color(255, 236, 209);
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 1;

                crate = new p.Sprite(80,0,130,60);
                crate.img = crateimg;
                crate.layer = 3;
                crate.img.scale = 2;
                crate.collider = "dynamic";

                stairs = new p.Sprite(510,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.collider = "dynamic";

                doors = new p.Sprite(210,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.collider = "dynamic";

                windows = new p.Sprite(670,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.collider = "dynamic";

                doorway = new p.Sprite(340,20,110,15);
                doorway.img = doorwayimg;
                doorway.layer = 3;
                doorway.img.scale = 1.5;
                doorway.collider = "dynamic";

                submit9.disabled = false;

                response.innerHTML = "";
            } else {
                response.innerHTML = "Try Again!";
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
                submit9.disabled = true;
            }
        });

        submit9.addEventListener('click', () => {
            let userAnswer9 = document.getElementById('input13.9').value.trim();
            userAnswer9 = userAnswer9.replace(/\s+/g, '');
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            if (
                userAnswer9 === 'tool.length;'
            ) {
                text1 = new p.Sprite(370,150,1,1);
                text1.collider = 'none';
                text1.text = "5";
                text1.textColor = p.color("black");
                text1.color = 'transparent';
                text1.stroke = 'transparent';
                text1.textSize = 100;
                text1.layer = 5;
                response.innerHTML = "";
            } else {
                response.innerHTML = "Try Again!";
                if (crate) crate.remove();
                if (stairs) stairs.remove();
                if (doors) doors.remove();
                if (windows) windows.remove();
                if (doorway) doorway.remove();
                if (text1) text1.remove();
                if (switch_) switch_.remove();
            }
        });
    };

    p.draw = () => {
        p.background(21, 97, 109);
    };
};

new p5(s1, 'array');

const s2 = (p) => {
    let crateimg, stairsimg, doorsimg, windowimg, doorwayimg, floorimg, floorimg2;
    let crate, stairs, doors, windows, doorway, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, text1, switchimg, switch_;
    let ball;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');

        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(300, 270);
        p.canvas.style.border = '3px solid rgb(21, 97, 109)';
        p.background(21, 97, 109);
        p.world.gravity.y = 10;
        
        floor = new p.Sprite(150, 200, 300, 50);
        floor.img = floorimg;
        floor.collider = 'static';
        floor.img.scale = 3.5;
        floor.img.offset.y = 10;

        crate = new p.Sprite(150, 0, 130, 90);
        crate.img = crateimg;
        crate.collider = 'static';
        crate.img.scale = 2;

        ball = new p.Sprite(0,0);
        ball.collider = 'dynamic';
        ball.vel.x = 6;
        ball.vel.y = 2;

        ball.color = 'beige';
        ball.stroke = 'orange';
        ball.d = 50;

        let submit2 = document.getElementById('submit_2');
        let response2 = document.getElementById('response_2');

        submit2.addEventListener('click', () => {
            console.log('Submit button clicked'); // Check if this is printed
            let input2 = document.getElementById('input_2').value.trim();
            input2 = input2.replace(/\s+/g, '');
            response2.innerHTML = '';
            if (input2 === 'dynamic') {
                ball.x = 0;
                ball.y=0;
                ball.vel.x = 6;
                ball.vel.y = 2;
                crate.y = 0;
                crate.x = 150;
                crate.collider = 'dynamic';
            } else if (input2 === 'static') {
                ball.x = 0;
                ball.y=0;
                ball.vel.x = 6;
                ball.vel.y = 2;
                crate.y = 0;
                crate.x = 150;
                crate.collider = 'static';
            } else if (input2 === 'kinematic') {
                ball.x = 0;
                ball.y=0;
                ball.vel.x = 6;
                ball.vel.y = 2;
                crate.y = 0;
                crate.x = 150;
                crate.collider = 'kinematic';
                crate.moveTo(150, 150,2);
            } else if (input2 === 'none') {
                ball.x = 0;
                ball.y=0;
                ball.vel.x = 6;
                ball.vel.y = 2;
                crate.y = 0;
                crate.x = 150;
                crate.collider = 'none';
            } else {
                ball.x = 0;
                ball.y=0;
                ball.vel.x = 6;
                ball.vel.y = 2;
                response2.innerHTML = 'Try Again!';
                crate.y = 0;
                crate.x = 150;
                crate.collider = 'dynamic';
            }
        });
        
    };

    p.draw = () => {
        p.background(21, 97, 109);
    };
};

new p5(s2, 'collider');

const s3 = (p) => {
    let crateimg, stairsimg, doorsimg, windowimg, doorwayimg, floorimg;
    let floor;
    let balls = new p.Group();

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');
        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(300, 270);
        p.canvas.style.border = '3px solid rgb(0, 21, 36)';
        p.background(0, 21, 36);

        floor = new p.Sprite(150, 250, 300, 10);
        floor.img = floorimg;
        floor.collider = 'static';
        floor.img.scale = 3.5;
        floor.img.offset.y = 10;

        p.world.gravity.y = -1;

        for (let i = 0; i < 7; i++) {
            let ball = new p.Sprite();
            ball.x = i * 40 + 30;
            ball.y = 100;
            ball.collider = 'dynamic';
            ball.color = 'beige';
            ball.stroke = 'orange';
            ball.d = 30;
            balls.add(ball);
            balls.mass = 50;
        }

        let submit1 = document.getElementById('submit_1');
        submit1.addEventListener('click', () => {
            let input = document.getElementById('input_1').value.trim().replace(/\s+/g, '');
            let value = parseFloat(input); //Allow decimal number
            if (!isNaN(value)) {
                balls.vel.x = 0;
                balls.vel.y = 0;
                p.world.gravity.y = value;
                balls.forEach((ball, i) => {
                    ball.y = 100;
                    ball.x = i * 40 + 30;
                });
            } else {
                alert("Enter a number!");
            }
        });

        let submit1_2 = document.getElementById('submit_1_2');
        submit1_2.addEventListener('click', () => {
            let input = document.getElementById('input_1_2').value.trim().replace(/\s+/g, '');
            let value = parseFloat(input);
            if (!isNaN(value)) {
                p.world.gravity.x = value;
                balls.vel.x = 0;
                balls.vel.y = 0;
                balls.forEach((ball, i) => {
                    ball.y = 100;
                    ball.x = i * 40 + 30;
                });
            } else {
                alert("Enter a number!");
            }
        });
    };

    p.draw = () => {
        p.background(0, 21, 36);
    };
};

new p5(s3, 'gravity');

const s4 = (p) => {
    let crateimg, stairsimg, doorsimg, windowimg, doorwayimg, floorimg, floorimg2;
    let crate, stairs, doors, windows, doorway, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, text1, switchimg, switch_;
    let ball;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');

        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(300, 270);
        p.canvas.style.border = '3px solid rgb(255, 125, 0)';
        p.background(255, 125, 0);
        p.world.gravity.y = 10;
        
        floor = new p.Sprite(150, 200, 300, 50);
        floor.img = floorimg;
        floor.collider = 'static';
        floor.img.scale = 3.5;
        floor.img.offset.y = -10;

        crate = new p.Sprite(150, 0, 130, 90);
        crate.img = crateimg;
        crate.collider = 'dynamic';
        crate.img.scale = 2;
        crate.mass = 8;

        ball = new p.Sprite(0,0);
        ball.collider = 'dynamic';
        ball.vel.x = 6;
        ball.vel.y = 2;

        ball.color = 'beige';
        ball.stroke = 'orange';
        ball.d = 50;
        ball.mass = 3;

        let submit2 = document.getElementById('submit_2_');

        submit2.addEventListener('click', () => {
            let input = document.getElementById('input_2_').value.trim().replace(/\s+/g, '');
            let value = parseFloat(input);

            crate.vel.x = 0;
            crate.vel.y = 0;
            crate.rotation = 0;
            if (!isNaN(value)) {
                ball.mass = value;
                ball.x = 0;
                ball.y = 0;
                ball.vel.x = 6;
                ball.vel.y = 2;
                crate.x = 150;
                crate.y = 0;
            } else {
                alert("Enter a number!");
            }
        });
                
    };

    p.draw = () => {
        p.background(255, 125, 0);
    };
};

new p5(s4, 'mass');

const s5 = (p) => {
    let crateimg, stairsimg, doorsimg, windowimg, doorwayimg, floorimg, floorimg2;
    let crate, stairs, doors, windows, doorway, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, text1, switchimg, switch_;
    let ball;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');

        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(300, 270);
        p.canvas.style.border = '3px solid rgb(0, 21, 36)';
        p.background(255, 236, 209);
        p.world.gravity.y = 10;

        floor = new p.Sprite(150, 200, 300, 50);
        floor.img = floorimg;
        floor.collider = 'static';
        floor.img.scale = 3.5;
        floor.img.offset.y = 10;

        crate = new p.Sprite(150, 150, 130, 90);
        crate.img = crateimg;
        crate.collider = 'kinematic';
        crate.img.scale = 2;
        crate.direction = 45;
        crate.speed = 3;


       let submitd = document.getElementById('submit_3_d');

        submitd.addEventListener('click', () => {
            let input = document.getElementById('input_3_d').value.trim().replace(/\s+/g, '');
            let value = parseFloat(input);
            let input2 = document.getElementById('input_3_s').value.trim().replace(/\s+/g, '');
            let value2 = parseFloat(input2);

            crate.x = 150;
            crate.y = 150;
            crate.rotation = 0;
            if (!isNaN(value) && !isNaN(value2)) {
                crate.direction = value;
                crate.speed = value2;
            } else {
                alert("Enter a number!");
            }
        });
                
    };

    p.draw = () => {
        p.background(255, 236, 209);
    };
};

new p5(s5, 'direction');

const s6 = (p) => {
    let crateimg, stairsimg, doorsimg, windowimg, doorwayimg, floorimg, floorimg2;
    let crate, stairs, doors, windows, doorway, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, text1, switchimg, switch_;
    let ball;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');

        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(300, 270);
        p.canvas.style.border = '3px solid rgb(78, 165, 217)';
        p.background(78, 165, 217);
        p.world.gravity.y = 10;

        floor = new p.Sprite(150, 200, 300, 50);
        floor.img = floorimg;
        floor.collider = 'static';
        floor.img.scale = 3.5;
        floor.img.offset.y = 10;

        crate = new p.Sprite(150, 0, 130, 90);
        crate.img = crateimg;
        crate.collider = 'dynamic';
        crate.img.scale = 2;
        crate.drag = 2;

       let submitd = document.getElementById('submit_4');

        submitd.addEventListener('click', () => {
            let input = document.getElementById('input_4').value.trim().replace(/\s+/g, '');
            let value = parseFloat(input);

            crate.x = 150;
            crate.y = 0;
            crate.rotation = 0;
            if (!isNaN(value)) {
                crate.drag = value;
            } else {
                alert("Enter a number!");
            }
        });
                
    };

    p.draw = () => {
        p.background(78, 165, 217);
    };
};

new p5(s6, 'drag');

const s7 = (p) => {
    let crateimg, stairsimg, doorsimg, windowimg, doorwayimg, floorimg, floorimg2;
    let crate, stairs, doors, windows, doorway, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, text1, switchimg, switch_;
    let ball;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');

        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(300, 270);
        p.canvas.style.border = '3px solid rgb(179, 203, 185)';
        p.background(179, 203, 185);
        p.world.gravity.y = 10;

        doorway = new p.Sprite(150,150, 300,10);
        doorway.collider = 'static';
        doorway.layer = 1;
        doorway.rotation = 5;
        doorway.color = p.color(18, 44, 52);
        doorway.stroke = 'white';

        ball = new p.Sprite(50,0);
        ball.d = 50;
        ball.layer = 2;
        ball.collider = 'dynamic';
        ball.color = p.color(68, 207, 203);
        ball.stroke = p.color(42, 68, 148);
        ball.strokeWeight = 2;
        ball.rotationLock = true;

       let submitd = document.getElementById('submit_6');

        submitd.addEventListener('click', () => {
            let input = document.getElementById('input_6').value.trim().replace(/\s+/g, '');

            let response = document.getElementById('response_6');
            response.innerHTML = '';
            ball.x = 50;
            ball.y = 0;
            ball.vel.x = 0;
            ball.vel.y = 0;

            if (input === 'sprite.rotationLock=true;') {
                ball.rotationLock = true;
                response.innerHTML = '';
            } else if (input ==='sprite.rotationLock=false;'){
                ball.rotationLock = false;
                response.innerHTML = '';
            } else{
                response.innerHTML = 'Try again!';
            }
        });
                
    };

    p.draw = () => {
        p.background(179, 203, 185);
    };
};

new p5(s7, 'rotationL');

const s8 = (p) => {
    let box, doorway;

    p.preload = () => {

    };

    p.setup = () => {
        p.createCanvas(300, 270);
        p.canvas.style.border = '3px solid rgb(73, 111, 93)';
        p.background(73, 111, 93);
        p.world.gravity.y = 10;

        doorway = new p.Sprite(150,150, 300,10);
        doorway.collider = 'static';
        doorway.layer = 1;
        doorway.rotation = 15;
        doorway.color = p.color(142, 164, 210);
        doorway.stroke = p.color(76, 159, 112);

        box = new p.Sprite(50,0, 50,50);
        box.collider = 'dynamic';
        box.layer = 1;
        box.rotation = 5;
        box.color = p.color(73, 81, 111);
        box.stroke = 'white';
        box.friction = 0.2;

       let submitd = document.getElementById('submit_7');

        submitd.addEventListener('click', () => {
            let input = document.getElementById('input_7').value.trim().replace(/\s+/g, '');
            let value = parseFloat(input);

            box.x = 50;
            box.y = 0;
            box.vel.x = 0;
            box.vel.y = 0;
            box.rotation = 0;
            if (!isNaN(value)) {
                box.friction = value;
            } else {
                alert("Enter a number!");
            }
        });
                
    };

    p.draw = () => {
        p.background(73, 111, 93);
    };
};

new p5(s8, 'friction');

