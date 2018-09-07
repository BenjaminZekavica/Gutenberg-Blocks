var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var Button = wp.components.Button;


registerBlockType('powerradach/teammodul', {
	title: 'Team Modul',
	description: 'Dieses Modul fügt eine Team Einzel Ansicht zum Gutenberg Editor hinzu.',
	icon: {
		background: '#f0dd00',
		foreground: '#fff',
		src: 'universal-access-alt'
	},
	category: 'prmodule',
	keywords: ['team', 'mitarbeiter', 'teammodul'],
	supports: {
		html: false,
		className: false,
		customClassName: false
	},

	// Custom Fields 
	attributes: {

		// Team Name  
		teamNameattr: {
			type: 'array',
			source: 'children',
			selector: '.team-name'
		},

		// Team Desc
		teamDescattr: {
			type: 'array',
			source: 'children',
			selector: '.team-desc'
		},

		// Media ID 
		mediaID: {
			type: 'number'
		},

		// Media URL s
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.team-image',
			attribute: 'src'
		}

	},

	edit: function edit(props) {
		// Import attr 
		var _props$attributes = props.attributes,
		    teamNameattr = _props$attributes.teamNameattr,
		    teamDescattr = _props$attributes.teamDescattr,
		    mediaID = _props$attributes.mediaID,
		    mediaURL = _props$attributes.mediaURL,
		    setAttributes = props.setAttributes,
		    className = props.className;

		// Add save Team Name 

		var teamNameSave = function teamNameSave(newContent) {
			setAttributes({ teamNameattr: newContent });
		};

		// Save Team Desc 

		var teamDescSave = function teamDescSave(newContent) {
			setAttributes({ teamDescattr: newContent });
		};

		// Team Image Select
		var onSelectImage = function onSelectImage(media) {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id
			});
		};

		// Return Markup 
		return wp.element.createElement(
			'div',
			{ className: 'pr-team-item-wraper-outer' },
			wp.element.createElement(
				'div',
				{ className: 'pr-team-item-inner' },
				wp.element.createElement(
					'div',
					{ className: 'image-wrapper' },
					wp.element.createElement(MediaUpload, {
						onSelect: onSelectImage,
						type: 'image',
						value: mediaID,
						render: function render(_ref) {
							var open = _ref.open;
							return wp.element.createElement(
								Button,
								{ className: mediaID ? 'image-button' : 'button button-large', onClick: open },
								!mediaID ? __('Teambild hochladen') : wp.element.createElement('img', { className: 'team-image', src: mediaURL })
							);
						}
					})
				),
				wp.element.createElement(
					'div',
					{ className: 'team-content' },
					wp.element.createElement(RichText, {
						tagName: 'h3',
						className: 'team-name',
						onChange: teamNameSave,
						value: teamNameattr,
						placeholder: 'Name der Person'
					}),
					wp.element.createElement(RichText, {
						tagName: 'div',
						className: 'team-desc',
						onChange: teamDescSave,
						value: teamDescattr,
						placeholder: 'Beschreibung der Person'
					})
				)
			)
		);
	},

	// FrontEnd
	save: function save(props) {
		var className = props.className,
		    _props$attributes2 = props.attributes,
		    teamNameattr = _props$attributes2.teamNameattr,
		    mediaURL = _props$attributes2.mediaURL,
		    mediaID = _props$attributes2.mediaID,
		    teamDescattr = _props$attributes2.teamDescattr;

		// Return Content  in Frontend 

		return wp.element.createElement(
			'div',
			{ className: 'pr-team-item-wraper-outer' },
			wp.element.createElement(
				'div',
				{ className: 'pr-team-item-inner' },
				wp.element.createElement(
					'div',
					{ className: 'image-wrapper' },
					mediaURL && wp.element.createElement('img', { className: 'team-image', src: props.attributes.mediaURL, alt: __('Team Bild') })
				),
				wp.element.createElement(
					'div',
					{ className: 'team-content' },
					wp.element.createElement(RichText.Content, {
						tagName: 'h3',
						className: 'team-name',
						value: props.attributes.teamNameattr
					}),
					wp.element.createElement(RichText.Content, {
						tagName: 'div',
						className: 'team-desc',
						value: props.attributes.teamDescattr
					})
				)
			)
		);
	}
});
//# sourceMappingURL=func.js.map
