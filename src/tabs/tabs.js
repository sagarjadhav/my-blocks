window.addEventListener( 'DOMContentLoaded', () => {
	const tabBlocks = document.querySelectorAll(
		'.wp-block-create-block-tabs'
	);

	tabBlocks.forEach( ( tabBlock ) => {
		const tabLabels = tabBlock.querySelectorAll( '.tab-label' );
		const tabPanels = tabBlock.querySelectorAll( '.tab-panel' );

		// console.log( tabLabels );
		// console.log( tabPanels );

		//check for mouse click or enter keypress
		const toggleEvent = ( e ) => {
			if ( e.type === 'click' ) {
				return true;
			} else if ( e.type === 'keypress' ) {
				const code = e.charCode || e.keyCode;
				if ( code === 32 || code === 13 ) {
					return true;
				}
			} else {
				return false;
			}
		}; //a11yEvent

		const toggleTabClasses = ( label, i ) => {
			const activeTab = tabBlock.querySelector( '.tab-label.active' );
			const activePanel = tabBlock.querySelector( '.tab-panel.active' );

			activeTab.classList.remove( 'active' );
			activeTab.setAttribute( 'tabindex', 0 );
			activeTab.setAttribute( 'aria-selected', false );

			label.classList.add( 'active' );
			label.setAttribute( 'tabindex', 0 );
			label.setAttribute( 'aria-selected', true );

			activePanel.classList.remove( 'active' );
			activePanel.setAttribute( 'tabindex', 0 );
			activePanel.setAttribute( 'aria-selected', false );
			activePanel.setAttribute( 'hidden', true );

			tabPanels[ i ].classList.add( 'active' );
			tabPanels[ i ].setAttribute( 'tabindex', 0 );
			tabPanels[ i ].setAttribute( 'aria-selected', true );
			tabPanels[ i ].removeAttribute( 'hidden' );
		};

		tabLabels.forEach( ( label, i ) => {
			if ( label.classList.contains( 'active' ) ) {
				tabPanels[ i ].classList.toggle( 'active' );
			}

			// On click
			label.onclick = ( e ) => {
				if ( toggleEvent( e ) === true ) {
					toggleTabClasses( label, i );
				}
			};

			// On keypress
			label.keypress = ( e ) => {
				if ( toggleEvent( e ) === true ) {
					toggleTabClasses( label, i );
				}
			};
		} );
	} ); //tabBlocks forEach
} );
