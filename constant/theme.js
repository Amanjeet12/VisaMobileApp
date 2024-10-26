import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  light: {
    background: '#fff',
    secondary: '#000',
    primary: '#327113',
    FONTS: {
      largeTitle: {fontFamily: 'Inter-Bold', fontSize: width * 0.125},
      h1: {
        fontFamily: 'Inter-Bold',
        fontSize: width * 0.095,
        lineHeight: width * 0.113,
      },
      h2: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.069,
        lineHeight: width * 0.094,
      },
      h3: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.065,
        lineHeight: width * 0.088,
      },
      h4: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.056,
        lineHeight: width * 0.082,
      },
      h5: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.04,
        lineHeight: width * 0.075,
      },

      body1: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.035,
        lineHeight: width * 0.084,
      },
    },
  },
  dark: {
    bbackground: '#fff',
    secondary: '#000',
    primary: '#327113',
    FONTS: {
      largeTitle: {fontFamily: 'Inter-Bold', fontSize: width * 0.125},
      h1: {
        fontFamily: 'Inter-Bold',
        fontSize: width * 0.095,
        lineHeight: width * 0.113,
      },
      h2: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.069,
        lineHeight: width * 0.094,
      },
      h3: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.065,
        lineHeight: width * 0.088,
      },
      h4: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.056,
        lineHeight: width * 0.082,
      },
      h5: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.04,
        lineHeight: width * 0.075,
      },

      body1: {
        fontFamily: 'Inter-Medium',
        fontSize: width * 0.035,
        lineHeight: width * 0.084,
      },
    },
  },
};
export const SIZES = {
  // global sizes
  base: width * 0.02,
  font: width * 0.0341,
  radius: width * 0.03,
  padding: width * 0.059,
  horizontal: width * 0.05,

  // font sizes
  extralarge: width * 0.123,
  largeTitle: width * 0.0973,
  h1: 20,
  h2: width * 0.069,
  h3: width * 0.06,
  h4: width * 0.054,
  h5: 20,
  h6: width * 0.0341,
  h7: width * 0.03,
  body1: width * 0.074,
  body2: width * 0.054,
  body3: width * 0.04,
  body4: width * 0.0341,
  body5: width * 0.03,
  body6: width * 0.025,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  light: {
    largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
    h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
    h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
    body1: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body1,
      lineHeight: 36,
    },
    body2: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body2,
      lineHeight: 30,
    },
    body3: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body3,
      lineHeight: 22,
    },
    body4: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body4,
      lineHeight: 22,
    },
    body5: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body5,
      lineHeight: 22,
    },
  },
  dark: {
    largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
    h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
    h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
    body1: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body1,
      lineHeight: 36,
    },
    body2: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body2,
      lineHeight: 30,
    },
    body3: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body3,
      lineHeight: 22,
    },
    body4: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body4,
      lineHeight: 22,
    },
    body5: {
      fontFamily: 'Poppins-Regular',
      fontSize: SIZES.body5,
      lineHeight: 22,
    },
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
