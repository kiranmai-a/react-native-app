const primary = '#f83c5c'
const secondary = '#f83c5c' //#39b696
const iconColor = '#fb5f26'
const iconDescColor = '#006400';
const btnColor = '#F2851E'



const gradientSecondary = ["#F2851E","#F2851E"]
const AppStyles = {
    primary: primary,
    btnColor:  btnColor,
    screen: {
        bg: "#F2851E"
    },
    header: {
        bg: primary,
        h1W: "500", h2W: "400", h3W: "300",
        color: '#fff',
    },
    subHeader: {
        bg: primary,
        h1W: "400", h2W: "300", h3W: "200", h4W: "100", h5W: "100",
        color: '#fff',
    },
    gradient: {
        color: [primary, secondary],
        secondary: gradientSecondary,
        scolor: ['#3455A4', '#31499D'],
        triColor: ["#44D1AD", "#44D1AD", '#fb5f26',"#fb5f26"],
        bottomColor: ['#fb5f26',"#fb5f26"]
    },
    fontSize: {
        h1: 17, h2: 16, h3: 15, h4: 14, h5: 13, h6: 12, l1: 20, l2: 19, l3: 18
    },
    segment: {
        color: secondary,
        borderColor: secondary,
        activeTintColor: '#FFF',
        inactiveTintColor: 'grey',
    },
    button: {
        bg: secondary
    },
    icon: {
        color: iconColor,
        iconDescColor: iconDescColor,
        title: primary
    },
    tabs: {
        activeTintColor: '#FFF',
        inactiveTintColor: '#FFF',
        fontSize: 9,
        bg: primary,
        tabBarPosition: "bottom",
    },
    toast: {
        success: '#76D7C4',
        warning: '#F0B27A',
        info: '#00CED1',
        error: '#EC7063',
    },
}

export default AppStyles
