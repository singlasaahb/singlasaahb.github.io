Menubar.File = function ( editor ) {

	// helpers
	
	function exportGeometry ( exporterClass ) {

		var object = editor.selected;
		var exporter = new exporterClass();

		var output = exporter.parse( object.geometry );

		if ( exporter instanceof THREE.BufferGeometryExporter ||
		     exporter instanceof THREE.GeometryExporter ) {

			output = JSON.stringify( output, null, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		}

		var blob = new Blob( [ output ], { type: 'text/plain' } );
//		var objectURL = URL.createObjectURL( blob );

//		window.open( objectURL, '_blank' );
//		window.focus();

		var a = document.createElement( 'a' );

		a.href = URL.createObjectURL( blob );
		a.download = 'geometry.json';
		a.click();

		delete a;

	};

	function exportObject ( exporterClass ) {

		var object = editor.selected;
		var exporter = new exporterClass();

		var output = JSON.stringify( exporter.parse( object ), null, '\t' );
		output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		var blob = new Blob( [ output ], { type: 'text/plain' } );
//		var objectURL = URL.createObjectURL( blob );

//		window.open( objectURL, '_blank' );
//		window.focus();

		var a = document.createElement( 'a' );

		a.href = URL.createObjectURL( blob );
		a.download = 'object.json';
		a.click();

		delete a;

	}

	function exportScene ( exporterClass ) {

		var exporter = new exporterClass();

		var output = exporter.parse( editor.scene );

		if ( exporter instanceof THREE.ObjectExporter ) {

			output = JSON.stringify( output, null, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		}

		var blob = new Blob( [ output ], { type: 'text/plain' } );
//		var objectURL = URL.createObjectURL( blob );

//		window.open( objectURL, '_blank' );
//		window.focus();

		var a = document.createElement( 'a' );

		a.href = URL.createObjectURL( blob );
		a.download = 'scene.json';
		a.click();

		delete a;

	}


	function exportSceneViaWindow ( exporterClass ) {

		var exporter = new exporterClass();

		var output = exporter.parse( editor.scene );

		if ( exporter instanceof THREE.ObjectExporter ) {

			output = JSON.stringify( output, null, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		}

		var blob = new Blob( [ output ], { type: 'text/plain' } );
		var objectURL = 'data:text/html,<a id="download" >Down it goes</a>' +
			'<script>' +
				'var a = document.getElementById( "download" );' +
				'var blob = new Blob(' +
					'["It is just a test, but I like it"], '+
					'{ type: "text/plain" }' +
				');' +
				'a.download = "love.txt"; ' +
				'a.href = window.URL.createObjectURL( blob ); ' +
			'</script>';

		window.open( objectURL, '_blank' )
		window.focus();

	}

	// event handlers

	function onNewOptionClick () {

		if ( confirm( 'Are you sure?' ) ) {

			editor.config.clear();
			editor.storage.clear( function () {

				location.href = location.pathname;

			} );

		}

	}

	function onImportOptionClick () {

		fileInput.click();

	}

	function onFileInputChange ( event ) {

		editor.loader.loadFile( fileInput.files[ 0 ] );

	}

	function onExportGeometryOptionClick () {
		
		var object = editor.selected;

		if ( object === null ) {

			alert( 'No object selected.' );
			return;

		}

		var geometry = object.geometry;

		if ( geometry === undefined ) {

			alert( 'The selected object doesn\'t have geometry.' );
			return;

		}

		if ( geometry instanceof THREE.BufferGeometry ) {

			exportGeometry( THREE.BufferGeometryExporter );

		} else if ( geometry instanceof THREE.Geometry ) {

			exportGeometry( THREE.GeometryExporter );

		}

	}

	function onExportObjectOptionClick () {

		if ( editor.selected === null ) {

			alert( 'No object selected' );
			return;

		}

		exportObject( THREE.ObjectExporter );

	}

	function onExportSceneOptionClick () {

		exportScene( THREE.ObjectExporter );

	}

	function onExportOBJOptionClick () {

		exportGeometry( THREE.OBJExporter );

	}

	function onExportSTLOptionClick () {

		exportScene( THREE.STLExporter );

	}

	function onExportSceneViaWindowOptionClick () {

		exportSceneViaWindow( THREE.ObjectExporter );

	}

	// create file input element for scene import

	var fileInput = document.createElement( 'input' );
	fileInput.type = 'file';
	fileInput.addEventListener( 'change', onFileInputChange);

	// configure menu contents

	var createOption = UI.MenubarHelper.createOption;
	var createDivider = UI.MenubarHelper.createDivider;
	
	var menuConfig = [
		createOption( 'New', onNewOptionClick ),
		createDivider(),

		createOption( 'Import', onImportOptionClick ),
		createDivider(),

		createOption( 'Export Geometry', onExportGeometryOptionClick ),
		createOption( 'Export Object', onExportObjectOptionClick ),
		createOption( 'Export Scene', onExportSceneOptionClick ),
		createOption( 'Export OBJ', onExportOBJOptionClick ),
		createOption( 'Export STL', onExportSTLOptionClick ),
		createDivider(),

		createOption( 'Export Scene Via Window', onExportSceneViaWindowOptionClick ),

	];

	var optionsPanel = UI.MenubarHelper.createOptionsPanel( menuConfig );

	return UI.MenubarHelper.createMenuContainer( 'File', optionsPanel );

}
