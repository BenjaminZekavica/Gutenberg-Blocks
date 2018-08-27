var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;


registerBlockType('powerradach/teammodul', {
    title: 'Team Modul',
    icon: 'universal-access-alt',
    category: 'layout',

    attributes: {
        teamename: {
            type: 'array',
            source: 'text',
            selector: '.team-name'
        },
        teamdescription: {
            type: 'array',
            source: 'children',
            selector: 'p'
        },
        teambild: {
            type: 'string',
            source: 'attribute',
            selector: '.team-image',
            attribute: 'src'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;


        // Team Image

        var teambild = attributes.teambild;

        function teamimagechangeContent(newContent) {
            setAttributes({ teambild: newContent });
        }

        // Team Name

        var teamename = attributes.teamename;

        function teamnamechangeContent(newContent) {
            setAttributes({ teamename: newContent });
        }

        // Team Description
        var teamdescription = attributes.teamdescription;

        function teamdescriptionchangeContent(newContent) {
            setAttributes({ teamdescription: newContent });
        }

        return wp.element.createElement(
            'div',
            { 'class': 'team-wrapper' },
            wp.element.createElement('div', { 'class': 'team-image' }),
            wp.element.createElement(
                'div',
                { 'class': 'team-content' },
                wp.element.createElement(
                    'div',
                    { 'class': 'team-name' },
                    wp.element.createElement(RichText, {
                        tagName: 'h3',
                        className: className,
                        onChange: teamnamechangeContent,
                        value: teamename
                    })
                ),
                wp.element.createElement(
                    'div',
                    { 'class': 'team-description' },
                    wp.element.createElement(RichText, {
                        tagName: 'p',
                        className: className,
                        onChange: teamdescriptionchangeContent,
                        value: teamdescription
                    })
                )
            )
        );
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes,
            className = _ref2.className;


        // Team Image
        var teambild = attributes.teambild;

        // Team Name

        var teamename = attributes.teamename;

        // Team Description

        var teamdescription = attributes.teamdescription;


        return wp.element.createElement(
            'div',
            { 'class': 'team-wrapper' },
            wp.element.createElement('div', { 'class': 'team-image' }),
            wp.element.createElement(
                'div',
                { 'class': 'team-content' },
                wp.element.createElement(
                    'div',
                    { 'class': 'team-name' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'h4',
                        className: className,
                        value: teamename
                    })
                ),
                wp.element.createElement(
                    'div',
                    { 'class': 'team-description' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'p',
                        className: className,
                        value: teamdescription
                    })
                )
            )
        );
    }
});
//# sourceMappingURL=func.js.map
