import React from 'react';

import Logo from './Logo';

export default {
    component: Logo,
    title: 'Logo',
};

const Template = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
    logo: {
        title: 'Test Logo',
        state: 'LOGO_DEFAULT',
    },
};
