// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dataMuseUrl: 'https://api.datamuse.com/words?sp=',
  // for use with Wolfram Alpha API
  WAappId: '&appid=8QE4G8-VA7L5A8W5G',
  WAbaseUrl: "https://api.wolframalpha.com/v1/simple?i=anagrams+"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
