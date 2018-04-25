
	draggableObjects();


	function DragObjects( camera, objectsxx, domElement) {



		objects = [];

		test = scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh && child !== groundPlane ) {

if ( child === groundPlane ) console.log( child ); 

				objects.push( child );

			}

		} );

console.log( objects )
things = objects;


		var mouse = new THREE.Vector2();

		var offset = new THREE.Vector3();
		var intersected;
		var selected;

		geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
		material = new THREE.MeshBasicMaterial( );

		plane = new THREE.Mesh( geometry, material );
//		plane.visible = false;
		scene.add( plane );

		renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
		renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
		renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );

		function onDocumentMouseMove( event ) {

			event.preventDefault();

			mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 )
			vector.unproject( camera );

			var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

			if ( selected ) {

				var intersects = raycaster.intersectObject( plane );

				selected.position.copy( intersects[ 0 ].point.sub( offset ) );

				return;

			}

			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {

				if ( intersected != intersects[ 0 ].object ) {

					if ( intersected && intersected.material.emissive ) {

						intersected.material.emissive.setHex( intersected.currentHex );

					}

					intersected = intersects[ 0 ].object;

					if ( intersected.material.emissive ) {

						intersected.currentHex = intersected.material.emissive.getHex();
						intersected.material.emissive.setHex( 0xff0000 );

					}


					plane.position.copy( intersected.position );

					plane.lookAt( camera.position );

				}

				document.body.style.cursor = 'pointer';

			} else {

				if ( intersected && intersected.material.emissive ) intersected.material.emissive.setHex( intersected.currentHex );

				intersected = null;

				document.body.style.cursor = 'auto';

			}

		}

		function onDocumentMouseDown( event ) {

			event.preventDefault();

			var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 )
			vector.unproject( camera );

			var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {

				controls.enabled = false;

				selected = intersects[ 0 ].object;

				var intersects = raycaster.intersectObject( plane );

				offset.copy( intersects[ 0 ].point ).sub( plane.position );

				document.body.style.cursor = 'move';

			}

		}

		function onDocumentMouseUp( event ) {

			event.preventDefault();

			controls.enabled = true;

			if ( intersected ) {

				plane.position.copy( intersected.position );

				selected = null;

			}

			document.body.style.cursor = 'auto';

		}

	}


	function draggableObjects () {

		if ( !scene ) {

			alert( 'Please load some objects first...');

			return;

		}

		var objects = [];

		test = scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh && child !== groundPlane ) {

if ( child === groundPlane ) console.log( child ); 

				objects.push( child );

			}

		} );

		VH.displayMarkdown( 'enable-draggable-objects.md', menuLeft );

		DragObjects( camera, objects, renderer.domElement );

	}