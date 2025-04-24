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
        p.background(21, 97, 109);
        p.world.gravity.y = 10;

        floor = new p.Sprite(150,250,350,50);
        floor.collider = "static";
        floor.img = floorimg;
        floor.debug = true;
        floor.img.offset.x = 0;
        floor.img.offset.y = -10;
        floor.img.scale = 3;
        floor.layer = 2;

        floor2 = new p.Sprite(530,250,350,50);
        floor2.collider = "static";
        floor2.img = floorimg;
        floor2.debug = true;
        floor2.layer = 2;

        floor6 = new p.Sprite(340,345,350,50);
        floor6.collider = "none";
        floor6.img = floorimg;
        floor6.debug = true;
        floor6.layer = 1;

        floor7 = new p.Sprite(-40,345,350,50);
        floor7.collider = "none";
        floor7.img = floorimg;
        floor7.debug = true;
        floor7.layer = 1;

        floor3 = new p.Sprite(339,172,350,50);
        floor3.collider = "none";
        floor3.img = floorimg2;
        floor3.img.scale = 3;
        floor3.debug = true;
        floor3.layer = 1;

        floor4 = new p.Sprite(-40,172,350,50);
        floor4.collider = "none";
        floor4.img = floorimg2;
        floor4.debug = true;
        floor4.layer = 1;

        floor5 = new p.Sprite(718,172,350,50);
        floor5.collider = "none";
        floor5.img = floorimg2;
        floor5.debug = true;
        floor5.layer = 1;

        floor8 = new p.Sprite(700,300,350,50);
        floor8.collider = "none";
        floor8.img = floorimg;
        floor8.debug = true;
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
                crate.debug = true;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
                windows.collider = "dynamic";

                doorway = new p.Sprite(665,20,110,15);
                doorway.img = doorwayimg;
                doorway.layer = 3;
                doorway.img.scale = 1.5;
                doorway.debug = true;
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
                crate.debug = true;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
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
                crate.debug = true;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
                windows.collider = "dynamic";

                switch_ = new p.Sprite(665,20,110,1);
                switch_.img = switchimg;
                switch_.layer = 3;
                switch_.img.scale = 2;
                switch_.debug = true;
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
                userAnswer4 === 'tool.shift()'
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
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(280, 0, 110, 100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(410, 0, 110, 100); 
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
                windows.collider = "dynamic";

                switch_ = new p.Sprite(535, 20, 110, 1);   
                switch_.img = switchimg;
                switch_.layer = 3;
                switch_.img.scale = 2;
                switch_.debug = true;
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
                userAnswer5 === 'tool.unshift("crate");'||
                userAnswer5 === "tool.unshift('crate');"
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
                crate.debug = true;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
                windows.collider = "dynamic";

                switch_ = new p.Sprite(665,20,110,1);
                switch_.img = switchimg;
                switch_.layer = 3;
                switch_.img.scale = 2;
                switch_.debug = true;
                switch_.collider = "dynamic";

                submit6.disabled = false;

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
                userAnswer6 === 'tool.pop()'
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
                crate.debug = true;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
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
            userAnswer7 = userAnswer6.replace(/\s+/g, '');
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
                crate.debug = true;
                crate.collider = "dynamic";

                stairs = new p.Sprite(250,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(410,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(540,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
                windows.collider = "dynamic";

                doorway = new p.Sprite(665,20,110,15);
                doorway.img = doorwayimg;
                doorway.layer = 3;
                doorway.img.scale = 1.5;
                doorway.debug = true;
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
                crate.debug = true;
                crate.collider = "dynamic";

                stairs = new p.Sprite(510,0,130,75);
                stairs.img = stairsimg;
                stairs.layer = 3;
                stairs.img.scale = 1.5;
                stairs.debug = true;
                stairs.collider = "dynamic";

                doors = new p.Sprite(210,0,110,100);
                doors.img = doorsimg;
                doors.layer = 3;
                doors.img.scale = 1.5;
                doors.debug = true;
                doors.collider = "dynamic";

                windows = new p.Sprite(670,0,110,100);
                windows.img = windowimg;
                windows.layer = 3;
                windows.img.scale = 1.5;
                windows.debug = true;
                windows.collider = "dynamic";

                doorway = new p.Sprite(340,20,110,15);
                doorway.img = doorwayimg;
                doorway.layer = 3;
                doorway.img.scale = 1.5;
                doorway.debug = true;
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
                userAnswer9 === 'tool.length'
            ) {
                text1 = new p.Sprite(370,150,1,1);
                text1.collider = 'none';
                text1.text = "Tool";
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
