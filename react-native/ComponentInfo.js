/**
 * 1. ActivityIndicator
 *    Props:
 *    1.  color:string
 *    2.  size:number
 *    3.  animated: bool
 *    4.  hidesWhenStoped: bool
 *
 * 2. Button
 *    Props:
 *    1.  title:string
 *    2.  color:string
 *    3.  onPress:function
 *    4.  disabled:bool
 *    5.  nextFocusLeft: number
 *    6.  nextFocusRight: number
 *    7.  nextFocusUp: number
 *    8.  nextFocusDown: number
 *    9.  hasTVPreferredFocus: bool,
 *    10. testId: string , Used to locate this view in end-to-end tests.
 *    11. touchSoundDisabled:bool , doesn't play system sound on touch.
 *
 * 3. Image
 *    Props:
 *    1.  accessible: bool
 *    2.  accessibilityLabel: string
 *    3.  blurRadius: number, note: IOS you will need to increase blurRadius more than 5
 *    4.  onLoad: function,
 *    5.  onLayout: function,
 *    5.  onError : function, Invoked on load error.
 *    7.  onLoadEnd: function
 *    8.  onLoadStart: function
 *    9.  onProgress: function
 *    10. resizeMethod: 'none', 'resize', 'scale'
 *    11. resizeMode: 'cover', 'contain', 'stretch', 'repeat', 'center'
 *    12. getSize: function(uri, success, failur)
 *    13. getSizeWithHeader: Image.getSizeWithHeaders(uri, headers, success, [failure]);
 *
 */