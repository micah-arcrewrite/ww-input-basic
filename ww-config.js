export default {
    editor: {
        label: { fr: 'Entrée de Formulaire', en: 'Form Input' },
    },
    properties: {
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            defaultValue: 'black',
        },
        fontFamily: {
            type: 'FontFamily',
            label: { en: 'Font family', fr: 'Font' },
            defaultValue: '',
        },
        fontSize: {
            type: 'Length',
            label: { en: 'Font size', fr: 'Taille du texte' },
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 10, max: 50 },
                    { value: 'em', label: 'em', min: 1, max: 50 },
                    { value: 'rem', label: 'rem', min: 1, max: 50 },
                ],
            },
            defaultValue: '15px',
        },
        name: {
            label: { en: 'Name', fr: 'Nom' },
            type: 'Text',
            section: 'settings',
            options: { placeholder: 'Name' },
            defaultValue: '',
        },
        required: {
            label: { en: 'Required', fr: 'Requis' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
        },
        type: {
            label: { en: 'Input type', fr: 'fr' },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: 'text', label: { en: 'Short answer', fr: 'Texte' } },
                    { value: 'textarea', label: { en: 'Long answer', fr: 'Texte' } },
                    { value: 'email', label: { en: 'Email', fr: 'Email' } },
                    { value: 'password', label: { en: 'Password', fr: 'Mot de passe' } },
                    { value: 'number', label: { en: 'Number', fr: 'Nombre' } },
                    { value: 'decimal', label: { en: 'Decimal', fr: 'Decimal' } },
                    { value: 'date', label: { en: 'Date', fr: 'Date' } },
                    { value: 'time', label: { en: 'Time', fr: 'Heure' } },
                    { value: 'tel', label: { en: 'Phone', fr: 'Téléphone' } },
                ],
            },
            defaultValue: 'text',
        },
        placeholder: {
            label: { en: 'Placeholder', fr: 'Placeholder' },
            type: 'Text',
            section: 'settings',
            options: { placeholder: 'Type text' },
            defaultValue: { en: '' },
            hidden: ({ type }) => type === 'date' || type === 'time',
            multiLang: true,
        },
        rows: {
            label: { en: 'Rows', fr: 'Rows' },
            type: 'Number',
            section: 'settings',
            options: { min: 1, max: 25 },
            defaultValue: 4,
            hidden: ({ type }) => type !== 'textarea',
        },
        resize: {
            label: { en: 'Resize', fr: 'Resize' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            hidden: ({ type }) => type !== 'textarea',
        },
        min: {
            label: { en: 'Min number', fr: 'fr' },
            type: 'Number',
            section: 'settings',
            options: { min: 0, max: 100 },
            defaultValue: 0,
            hidden: ({ type }) => type !== 'number' && type !== 'decimal',
        },
        max: {
            label: { en: 'Max number', fr: 'fr' },
            type: 'Number',
            section: 'settings',
            options: { min: 0, max: 10000 },
            defaultValue: 1000,
            hidden: ({ type }) => type !== 'number' && type !== 'decimal',
        },
        precision: {
            label: { en: 'Precision', fr: 'Precision' },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: '0.1', label: { en: '1.0' } },
                    { value: '0.01', label: { en: '1.00' } },
                    { value: '0.001', label: { en: '1.000' } },
                    { value: '0.0001', label: { en: '1.0000' } },
                    { value: '0.00001', label: { en: '1.00000' } },
                    { value: '0.000001', label: { en: '1.000000' } },
                    { value: '0.0000001', label: { en: '1.0000000' } },
                    { value: '0.00000001', label: { en: '1.00000000' } },
                ],
            },
            defaultValue: '0.1',
            hidden: ({ type }) => type !== 'decimal',
        },
    },
};
