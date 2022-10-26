window.addEventListener( 'DOMContentLoaded', () => {
	const allAccordions = document.querySelectorAll( '.accordion' );
	// console.log( allAccordions );

	const openAccordion = ( accordion ) => {
		const content = accordion.querySelector( '.accordion__content' );
		accordion.classList.add( 'accordion__active' );
		content.style.maxHeight = content.scrollHeight + 'px';
	};

	const closeAccordion = ( accordion ) => {
		const content = accordion.querySelector( '.accordion__content' );
		accordion.classList.remove( 'accordion__active' );
		content.style.maxHeight = null;
	};

	allAccordions.forEach( ( eachAccordion ) => {
		const accordionItems =
			eachAccordion.querySelectorAll( '.accordion__item' );

		// console.log( accordion );
		// console.log( accordionItems );

		accordionItems.forEach( ( accordion ) => {
			const handle = accordion.querySelector( '.accordion__handle' );
			const content = accordion.querySelector( '.accordion__content' );

			handle.onclick = () => {
				if ( content.style.maxHeight ) {
					closeAccordion( accordion );
				} else {
					accordionItems.forEach( ( accordionItem ) =>
						closeAccordion( accordionItem )
					);

					openAccordion( accordion );
				}
			};

			if ( accordion.classList.contains( 'accordion__active' ) ) {
				openAccordion( accordion );
			}
		} );
	} );
} );
