	var V3MC = {} || V3MC;

	V3MC.u = 80;
	V3MC.v = 40;

	var outU;
	var outV;

	V3MC.addMeierControlsTab = function() {

		var tab = V3LI.libraries.appendChild( document.createElement( 'div' ) );
		tab.title = 'Be in control of your equations';
		tab.innerHTML =
			'<a id=tabControls><p class=buttonLibrary >' +
				'<i class="fa fa-cogs"></i> Meier Controls...' +
			'</p></a>';
		tabControls.onclick = function() { V3MC.updateControlsTab(); JA.toggleTab( V3MC.controlsTab ); };

		V3MC.controlsTab = tab.appendChild( document.createElement( 'div' ) );
		V3MC.controlsTab.style.cssText = 'cursor: auto; display: none;' ;
		V3MC.controlsTab.innerHTML =
			'<p><i>Libraries can have dedicated plugins</i></p>' +
			'<h3>Coefficients</h3>' +
			'<div id=divCon ></div>' +
		'';

	};

	V3MC.updateControlsTab = function() {
		var txt = '';

			if ( app.a !== undefined) {
				txt += 'a: <input type=range id=inpA title="default ' + app.a + '" ' +
					'min=' + app.aMin + ' max=' + app.aMax + ' step=' + app.aStep + ' value=' + app.a +
					' onmousemove=outA.value=inpA.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outA style=width:30px; onchange=inpA.value=outA.value;V3MC.updateMesh(); value=' + app.a + ' ><br>';
//	not			inpA.type = 'range';
//				inpA.value = app.a;
//				outA.value = app.a;
//				inpA.min = app.aMin;
//				inpA.max = app.aMax;
//				inpA.step = app.aStep;
//				inpA.onchange = updateMesh;
			}

			if ( app.b !== undefined) {
				txt += 'b: <input type=range id=inpB title="default ' + app.b + '" ' +
					'min=' + app.bMin + ' max=' + app.bMax + ' step=' + app.bStep + ' value=' + app.b +
					' onmousemove=outB.value=inpB.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outB style=width:30px; onchange=inpB.value=outB.value;V3MC.updateMesh(); value=' + app.b + ' ><br>';
			}

			if ( app.c !== undefined) {
				txt += 'c: <input type=range id=inpC title="default ' + app.c + '" ' +
					'min=' + app.cMin + ' max=' + app.cMax + ' step=' + app.cStep + ' value=' + app.c+
					' onmousemove=outC.value=inpC.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outC style=width:30px; onchange=inpC.value=outC.value;V3MC.updateMesh(); value=' + app.c + ' ><br>';
			}

			if ( app.d !== undefined ) {
				txt += 'd: <input type=range id=inpD title="default ' + app.d + '" ' +
					'min=' + app.dMin + ' max=' + app.dMax + ' step=' + app.dStep + ' value=' + app.d +
					' onmousemove=outD.value=inpD.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outD style=width:30px; onchange=inpD.value=outD.value;V3MC.updateMesh(); value=' + app.d + ' ><br>';
			}

			if ( app.e !== undefined  ) {
				txt += 'e: <input type=range id=inpE title="default ' + app.e + '" ' +
					'min=' + app.eMin + ' max=' + app.eMax + ' step=' + app.eStep + ' value=' + app.e +
					' onmousemove=outE.value=inpE.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outE style=width:30px; onchange=inpE.value=outE.value;V3MC.updateMesh(); value=' + app.e + ' ><br>';
			}

			if ( app.f !== undefined  ) {
				txt += 'f: <input type=range id=inpF title="default ' + app.f + '" ' +
					'min=' + app.fMin + ' max=' + app.fMax + ' step=' + app.fStep + ' value=' + app.f +
					' onmousemove=outF.value=inpF.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outF style=width:30px; onchange=inpF.value=outF.value;V3MC.updateMesh(); value=' + app.f + ' ><br>';
			}

			if ( app.g !== undefined) {
				txt += 'g: <input type=range id=inpG title="default ' + app.g + '" ' +
					'min=' + app.gMin + ' max=' + app.gMax + ' step=' + app.gStep + ' value=' + app.g +
					' onmousemove=outG.value=inpG.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outG style=width:30px; onchange=inpG.value=outG.value;V3MC.updateMesh(); value=' + app.g + ' ><br>';
			}

			if ( app.h !== undefined) {
				txt += 'h: <input type=range id=inpH title="default ' + app.h + '" ' +
					'min=' + app.hMin + ' max=' + app.hMax + ' step=' + app.hStep + ' value=' + app.h +
					' onmousemove=outH.value=inpH.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outH style=width:30px; onchange=inpH.value=outH.value;V3MC.updateMesh(); value=' + app.h + ' ><br>';
			}

			if ( app.i !== undefined) {
				txt += 'i: <input type=range id=inpI title="default ' + app.i + '" ' +
					'min=' + app.hMin + ' max=' + app.iMax + ' step=' + app.iStep + ' value=' + app.i +
					' onmousemove=outI.value=inpI.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outI style=width:30px; onchange=inpI.value=outI.value;V3MC.updateMesh(); value=' + app.i + ' ><br>';
			}

			if ( app.n !== undefined) {
				txt += 'n: <input type=range id=inpN title="default ' + app.n + '" ' +
					'min=' + app.nMin + ' max=' + app.nMax + ' step=' + app.nStep + ' value=' + app.n +
					' onmousemove=outN.value=inpN.value;V3MC.updateMesh(); style=width:200px; > ' +
					'<input id=outN style=width:30px; onchange=inpN.value=outN.value;V3MC.updateMesh(); value=' + app.n + ' ><br>';
			}

			if ( app.R1 !== undefined) {
				txt += 'R1: <input type=range id=inpR1 title="default ' + app.R1 + '" ' +
					'min=' + app.R1Min + ' max=' + app.R1Max + ' step=' + app.R1Step + ' value=' + app.R1 +
					' onmousemove=outR1.value=inpR1.value;V3MC.updateMesh(); style=width:195px; > ' +
					'<input id=outR1 style=width:30px; onchange=inpR1.value=outR1.value;V3MC.updateMesh(); value=' + app.R1 + ' ><br>';
			}

			if ( app.R2 !== undefined) {
				txt += 'R2: <input type=range id=inpR2 title="default ' + app.R2 + '" ' +
					'min=' + app.R2Min + ' max=' + app.R2Max + ' step=' + app.R2Step + ' value=' + app.R2 +
					' onmousemove=outR2.value=inpR2.value;V3MC.updateMesh(); style=width:195px; > ' +
					'<input id=outR2 style=width:30px; onchange=inpR2.value=outR2.value;V3MC.updateMesh(); value=' + app.R2 + ' ><br>';
			}

			if ( app.u !== undefined ) {

				txt += '<h3>Number of Vertices</h3>' +
					'u: <input type=range id=inpU title="default ' + V3MC.u + '" ' +
					'min=1 max=200 step=1 value=' + app.u +
					' onmousemove=outU.value=inpU.value;V3MC.updateMesh(); style=width:195px; > ' +
					'<input id=outU style=width:30px; onchange=inpU.value=outU.value;V3MC.updateMesh(); value=' + app.u + ' ><br>';
			} else {
				app.u  = V3MC.u;
			}

			if ( app.v !== undefined ) {
				txt += 'v: <input type=range id=inpV title="default ' + V3MC.v + '" ' +
					'min=1 max=200 step=1 value=' + app.v +
					' onmousemove=outV.value=inpV.value;V3MC.updateMesh(); style=width:195px; > ' +
					'<input id=outV style=width:30px; onchange=inpV.value=outV.value;V3MC.updateMesh(); value=' + app.v + ' ><br>';
			} else {
				app.v  = V3MC.v;
			}

			txt += '<button onclick=V3LI.updateIframe(V3LI.fileList,V3LI.index,V3LI.basepath,V3LI.filename,V3LI.boilerplate); >Reset</button>';

			divCon.innerHTML = txt;

	};

	V3MC.updateMesh = function() {

		if ( scene.select ) { app.scene.remove( scene.select ); }

		if ( app.a !== undefined ) app.a = parseFloat( outA.value );
		if ( app.b !== undefined ) app.b = parseFloat( outB.value );
		if ( app.c !== undefined ) app.c = parseFloat( outC.value );
		if ( app.d !== undefined ) app.d = parseFloat( outD.value );
		if ( app.e !== undefined ) app.e = parseFloat( outE.value );
		if ( app.f !== undefined ) app.f = parseFloat( outF.value );
		if ( app.g !== undefined ) app.g = parseFloat( outG.value );
		if ( app.h !== undefined ) app.h = parseFloat( outH.value );
		if ( app.i !== undefined ) app.i = parseFloat( outI.value );

		if ( app.n !== undefined ) app.n = parseFloat( outN.value );

		if ( app.u !== undefined && outU !== undefined ) { app.u = parseFloat( outU.value ); }
		if ( app.v !== undefined && outV !== undefined ) { app.v = parseFloat( outV.value ); }

		if ( app.R1 !== undefined ) app.R1 = parseFloat( outR1.value );
		if ( app.R2 !== undefined ) app.R2 = parseFloat( outR2.value );

		geometry = new THREE.ParametricGeometry( app.curve, app.u, app.v );
		material = scene.select.material;
//		var texture = new THREE.ImageUtils.loadTexture( JAMA.texturePath + 'textures/square.png' );
//		material = new THREE.MeshPhongMaterial( { map: texture, side: THREE.DoubleSide } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		app.scene.add( mesh );
		scene.select = mesh;

	};
