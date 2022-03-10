## Browser Logs In Context Project


## Usage

The Browser Logs in Context (LIC) Open Source Project is a collaborative effort to display and provide additional context when dealing with JavaScript errors.
Specifically this use case is looking at scenarios where the a JavaScript error has occured in the Browser AND the Browser is yet to interact with backend 
service.  In these cases, the user will not be able to take advantage of standard New Relic Distributed Tracing.  As such since there is no trace.id that
has been produced, the user will also not be able to take advantage of New Relic Logs in Context.

The Browers LIC is an opionated first release.  It is assumed that users who take advantage of this open source application have the ability to produce their own universal ID that can be utilized by this application.  For the sake of this release, the author has utilized an attribute called UUID or Universal User Id.
The UUID in concert with the entityGUID is utilized to locate relevant content from New Relic logs.

Once the application has been deployed, please proceed to New Relic Browser Application

![Screenshot #1](/catalog/screenshots/Access.png)

## Example of User Code

Examples of User Code and references will be posted here.  It is with this code that the user will be sending Browser specific content that can be ingested by New Relic log forwarder

## Open Source License

This project is distributed under the [Apache 2 license](LICENSE).

## Dependencies

[New Relic One Community](https://github.com/newrelic/nr1-community) A community-driven library of useful components for building on New Relic One's programmability platform.

## Getting started

First, ensure that you have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [NPM](https://www.npmjs.com/get-npm), and [NR1 CLI](https://developer.newrelic.com/build-apps/ab-test/install-nr1) installed. If you're unsure whether you have one or both of them installed, run the following command(s) (If you have them installed these commands will return a version number, if not, the commands won't be recognized):

```bash
git --version
npm -v
nr1 --version
```

Next, clone this repository and run the following scripts:

```bash
nr1 nerdpack:clone -r https://github.com/evanhaxton/Browser-LIC.git
nr1 nerdpack:uuid -gf
npm install
npm start
```

Visit [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local), navigate to the Nerdpack, and :sparkles:

## Deploying this Nerdpack

Open a command prompt in the nerdpack's directory and run the following commands.

```bash
# To create a new uuid for the nerdpack so that you can deploy it to your account:
# nr1 nerdpack:uuid -g [--profile=your_profile_name]

# To see a list of APIkeys / profiles available in your development environment:
# nr1 profiles:list

nr1 nerdpack:publish [--profile=your_profile_name]
nr1 nerdpack:deploy [-c [DEV|BETA|STABLE]] [--profile=your_profile_name]
nr1 nerdpack:subscribe [-c [DEV|BETA|STABLE]] [--profile=your_profile_name]
```

Visit [https://one.newrelic.com](https://one.newrelic.com), navigate to the Nerdpack, and :sparkles:

Please do not report issues with Browser LIC to New Relic Global Technical Support. Instead, visit the [`Explorers Hub`](https://discuss.newrelic.com/c/build-on-new-relic) for troubleshooting and best-practices.

## Issues / Enhancement Requests

Issues and enhancement requests can be submitted in the [Issues tab of this repository](../../issues). Please search for and review the existing open issues before submitting a new issue.

## Security

As noted in our [security policy](https://github.com/newrelic/nr1-status-pages/security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## Contributing

Contributions are welcome (and if you submit a Enhancement Request, expect to be invited to contribute it yourself :grin:). Please review our [Contributors Guide](CONTRIBUTING.md).

Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. If you'd like to execute our corporate CLA, or if you have any questions, please drop us an email at opensource@newrelic.com.
