import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// console.log(width * 0.095);

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
    background: '#000',
    secondary: '#fff',
    FONTS: {
      largeTitle: {fontFamily: 'Poppins-Black', fontSize: 40},
      h1: {fontFamily: 'Poppins-Bold', fontSize: 30, lineHeight: 36},
    },
  },
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  horizontal: 20,

  // font sizes
  extralarge: 50,
  largeTitle: 40,
  h1: 30,
  h2: 28,
  h3: 25,
  h4: 22,
  h5: 16,
  h6: 14,
  h7: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,

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
