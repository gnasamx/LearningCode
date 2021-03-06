# Modern React

👋 hi there! My name is [Kent C. Dodds](https://kentcdodds.com)! This is a
workshop repo to teach you about using all the goodies we got from React 16.7.0!

[![chat-badge][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![AppVeyor Build Status][win-build-badge]][win-build]
[![Code Coverage][coverage-badge]][coverage]
[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## System Requirements

* [git][git] v2.14.1 or greater
* [NodeJS][node] v8.9.4 or greater
* [npm][npm] v5.6.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

You may be able to work through the entire workshop in the browser. Go to
[this codesandbox](https://codesandbox.io/s/github/kentcdodds/modern-react)
and you should be good to go.

If you'd rather be able to work through the workshop on your own computer, then
follow the following instructions.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/kentcdodds/modern-react.git
cd modern-react
npm run setup --silent
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier If you get any errors, please read through
them and see if you can find out what the problem is. You may also want to look
at [Troubleshooting](#troubleshooting). If you can't work it out on your own
then please [file an issue][issue] and provide _all_ the output from the
commands you ran (even if it's a lot).

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://github.com/facebook/create-react-app) application.

You can also open
[the deployment of the app on Netlify](https://modern-react.netlify.com/).

## Running the tests

```shell
npm test
```

This will start [Jest](http://facebook.github.io/jest) in watch mode. Read the
output and play around with it.

**Your goal will be to go into each test, swap the final version for the
exercise version in the import, and make the tests pass**

## Helpful Emoji 🐨 💰 💯

Each exercise has comments in it to help you get through the exercise.
**Kody the Koala Bear** and **Marty the Money Bag** are here to help you.
**Kody** 🐨 will tell you when there's something specific you should do, and
**Marty** 💰 will give you specific tips along the way. Should you finish
early, **Hannah the Hundred Points Symbol** 💯 will give you some additional
challenges that you can try!

## Troubleshooting

<details>

<summary>"npm run setup" command not working</summary>

Here's what the setup script does. If it fails, try doing each of these things
individually yourself:

```
# verify your environment will work with the project
node ./scripts/verify

# install dependencies
npm install

# verify the project is ready to run
npm run build
npm run test:coverage
```

If any of those scripts fail, please try to work out what went wrong by the
error message you get. If you still can't work it out, feel free to
[open an issue][issue] with _all_ the output from that script. I will try to
help if I can.

</details>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub><b>Kent C. Dodds</b></sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/modern-react/commits?author=kentcdodds "Code") [📖](https://github.com/kentcdodds/modern-react/commits?author=kentcdodds "Documentation") [🚇](#infra-kentcdodds "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/kentcdodds/modern-react/commits?author=kentcdodds "Tests") | [<img src="https://avatars0.githubusercontent.com/u/3624098?v=4" width="100px;"/><br /><sub><b>Andrew Clark</b></sub>](https://github.com/acdlite)<br />[💬](#question-acdlite "Answering Questions") [🤔](#ideas-acdlite "Ideas, Planning, & Feedback") [👀](#review-acdlite "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/6820?v=4" width="100px;"/><br /><sub><b>Sophie Alpert</b></sub>](https://sophiebits.com/)<br />[💬](#question-sophiebits "Answering Questions") [🤔](#ideas-sophiebits "Ideas, Planning, & Feedback") [👀](#review-sophiebits "Reviewed Pull Requests") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at kent@doddsfamily.us

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[chat]: https://gitter.im/kentcdodds/modern-react
[chat-badge]: https://img.shields.io/gitter/room/kentcdodds/modern-react.js.svg?style=flat-square&logo=gitter-white
[build-badge]: https://img.shields.io/travis/kentcdodds/modern-react.svg?style=flat-square&logo=travis
[build]: https://travis-ci.org/kentcdodds/modern-react
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/modern-react/blob/master/README.md#license
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/modern-react/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/modern-react.svg?style=social
[github-watch]: https://github.com/kentcdodds/modern-react/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/modern-react.svg?style=social
[github-star]: https://github.com/kentcdodds/modern-react/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20modern-react%20by%20@kentcdodds%20https://github.com/kentcdodds/modern-react%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/modern-react.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/modern-react/issues/new
[win-build-badge]: https://img.shields.io/appveyor/ci/kentcdodds/modern-react.svg?style=flat-square&logo=appveyor
[win-build]: https://ci.appveyor.com/project/kentcdodds/modern-react
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/modern-react.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/modern-react
[watchman]: https://facebook.github.io/watchman/docs/install.html
