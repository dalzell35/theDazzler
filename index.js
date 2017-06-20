/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                'You can plant a pineapple by slicing off the top and planting it in the soil.',
                'The weight of all the ants on earth is equivalent to the weight of all the humans on earth.',
                'A Pineapple is actually a bunch of small berries fused together into a single mass',
                'Cows Have Four Different Stomachs.',
                'If you lift a kangaroo’s tail off the ground it can’t hop.',
                'Undergound is the only word in the english language that starts with Und and ends with Und',
                'hippopotomonstrosesquipedaliophobia is the fear of long words.',
                'Avocados have the highest fibre and calories of any fruit.',
                'The Earth orbits the sun at an average speed of 107, 220 kms per hour.'
            ],
            SKILL_NAME: 'British Space Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say what is the fact of the day, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'You can plant a pineapple by slicing off the top and planting it in the soil.',
                'The weight of all the ants on earth is equivalent to the weight of all the humans on earth.',
                'A Pineapple is actually a bunch of small berries fused together into a single mass',
                'Cows Have Four Different Stomachs.',
                'If you lift a kangaroo’s tail off the ground it can’t hop.',
                'Undergound is the only word in the english language that starts with Und and ends with Und',
                'hippopotomonstrosesquipedaliophobia is the fear of long words.',
                'Avocados have the highest fibre and calories of any fruit.',
                'The Earth orbits the sun at an average speed of 107, 220 kms per hour.'
            ],
            SKILL_NAME: 'British Space Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say what is the fact of the day, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
