import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
} from '@sportsuex/tokens';

export const TypographyRaj = () => {
  return Object.entries(fonts).map(([keyFonts, valueFonts]) => {
    if (valueFonts === 'Rajdhani') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            background: colors.black,

            justifyContent: 'space-between',
            boxShadow: shadows.c,
            borderRadius: radii.basic,
          }}>
          {Object.entries(fontWeights).map(([keyWeights, valueWeights]) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  //   background: 'black',
                }}>
                <h1
                  style={{
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    color: colors.primary,
                    fontFamily: valueFonts,
                    verticalAlign: 'end',
                    textAlign: 'center',
                    //     textShadow: `0px 0px 1px ${colors.primary}`,
                    margin: 'auto',
                  }}>
                  {valueWeights}
                </h1>
                {Object.entries(fontSizes).map(([keySizes, valueSizes]) => {
                  let ok: boolean;
                  if (valueSizes === '0.75rem') {
                    ok = true;
                  } else {
                    ok = false;
                  }
                  return (
                    <div
                      style={{
                        // color: colors.light_bg,
                        marginTop: '-5rem',

                        borderRadius:
                          keySizes === 'xs'
                            ? '10px 10px 0px 0px'
                            : keySizes === 'xll' && keyWeights === '400'
                            ? '0px 0px 10px 10px'
                            : '',
                        // background: colors.black,
                        // width: '15rem',
                        height: 'auto',
                        padding: '3rem',

                        justifyContent: 'space-between',
                        fontFamily: valueFonts,
                        display: 'flex',
                        columnGap: '5rem',
                        alignItems: 'center',
                      }}>
                      <h1
                        style={{
                          fontWeight: valueWeights,
                          fontSize: valueSizes,
                          color: 'white',
                          textAlign: 'center',
                        }}>
                        {valueFonts}
                      </h1>
                      <h4
                        style={{
                          fontWeight: 500,
                          textAlign: 'center',
                          fontSize: fontSizes.xs,
                          color: colors.light_bg,
                          opacity: '70%',
                        }}>
                        {keySizes + ' | ' + valueSizes}
                      </h4>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    }
  });
};

export const TypographyInter = () => {
  return Object.entries(fonts).map(([keyFonts, valueFonts]) => {
    if (valueFonts === 'Inter') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            background: colors.black,

            justifyContent: 'space-between',
            boxShadow: shadows.c,
            borderRadius: radii.basic,
          }}>
          {Object.entries(fontWeights).map(([keyWeights, valueWeights]) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  //   background: 'black',
                }}>
                <h1
                  style={{
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    color: colors.primary,
                    fontFamily: valueFonts,
                    verticalAlign: 'end',
                    textAlign: 'center',
                    //     textShadow: `0px 0px 1px ${colors.primary}`,
                    margin: 'auto',
                  }}>
                  {valueWeights}
                </h1>
                {Object.entries(fontSizes).map(([keySizes, valueSizes]) => {
                  let ok: boolean;
                  if (valueSizes === '0.75rem') {
                    ok = true;
                  } else {
                    ok = false;
                  }
                  return (
                    <div
                      style={{
                        color: colors.light_bg,
                        marginTop: '-5rem',

                        borderRadius:
                          keySizes === 'xs'
                            ? '10px 10px 0px 0px'
                            : keySizes === 'xll' && keyWeights === '400'
                            ? '0px 0px 10px 10px'
                            : '',
                        // background: colors.black,
                        // width: '15rem',
                        height: 'auto',
                        padding: '3rem',

                        justifyContent: 'space-between',
                        fontFamily: valueFonts,
                        display: 'flex',
                        columnGap: '5rem',
                        alignItems: 'center',
                      }}>
                      {' '}
                      <h1
                        style={{
                          fontWeight: valueWeights,
                          fontSize: valueSizes,
                          color: 'white',
                          textAlign: 'center',
                        }}>
                        {valueFonts}
                      </h1>
                      <h4
                        style={{
                          fontWeight: 500,
                          textAlign: 'center',
                          color: colors.light_bg,
                          fontSize: fontSizes.xs,
                          opacity: '70%',
                        }}>
                        {keySizes + ' | ' + valueSizes}
                      </h4>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    }
  });
};
