const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('My Little Hero', function() {
    describe('General', function() {
        it('TC-001 title = \'MLH trial\'', function() {
            browser.url('https://qa-apps.netlify.app/app_my_hero#');
            const title = browser.getTitle();
            expect(title).toEqual(exp.title);
        });
        it('TC-002 Page level title =\'My Little Hero\'', function() {
            const title = $$(sel.pageTitle)[0].getText();
            expect(title).toEqual(exp.pageTitle);
        });
        it('TC-003 Description = \'Let\'s create your own HERO! It\'s super easy with our application!\'', function() {
            const desc = $$(sel.desc)[0].getText();
            expect(desc).toEqual(exp.desc);
        });

    });
    describe('All labels are present', function() {
        it('TC-004 Label for name', function() {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-005 Label for gender', function() {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-006 Label for age', function() {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-007 Label for story', function() {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });
    });
    describe('Labels have correct text', function() {
        it('TC-008 Name label = 1. What is your HERO\'s name?', function() {
            const text = $$(sel.label)[0].getText();
            expect(text).toEqual(exp.labelName);
        });
        it('TC-009 Gender label = 2. Please choose a gender.', function() {
            const text = $$(sel.label)[1].getText();
            expect(text).toEqual(exp.labelGender);
        });
        it('TC-010 Age label = 3. How old is your hero?', function() {
            const text = $$(sel.label)[2].getText();
            expect(text).toEqual(exp.labelAge);
        });
        it('TC-011 Story label = 4. What type of story would you like to read?', function() {
            const text = $$(sel.label)[3].getText();
            expect(text).toEqual(exp.labelStory);
        });
    });
    describe('Name input field', function() {
        it('TC-012 Name placeholder = \'Hero\'s name\'', function() {
            const text = $$(sel.name)[0].getAttribute('placeholder');
            expect(text).toEqual(exp.phName);
        });
    });
    describe('Gender radio buttons', function() {
        it('TC-013 Gender has radio button \'he\'', function() {
            const text = $$(sel.gender)[0].getText();
            expect(text).toEqual(exp.genderBoy);
        });
        it('TC-014 Gender has radio button \'she\'', function() {
            const text = $$(sel.gender)[1].getText();
            expect(text).toEqual(exp.genderGirl);
        });
        it('TC-015 Gender has radio button \'it\'', function() {
            const text = $$(sel.gender)[2].getText();
            expect(text).toEqual(exp.genderElse);
        });
    });
    describe('Age input field', function() {
       it('TC-016 Age placeholder = \'Hero\'s age\'', function() {
           const text = $$(sel.age)[0].getAttribute('placeholder');
           expect(text).toEqual(exp.phAge);
       });
    });
    describe('Story dropdown menu', function() {
        it('TC-017 Story placeholder = Type of the story', function() {
            const text = $$(sel.phStory)[0].getText();
            expect(text).toEqual(exp.phStory);
        });
    });
    describe('Image upload', function() {
        it('TC-018 Image upload placeholder = \'drag and drop your image here or browse\'', function() {
            const text = $$(sel.phImage)[1].getText();
            expect(text).toEqual(exp.phImage);
        });
    });
    describe('Submit button', function(){
        it('TC-019 Submit button is disabled if name, gender, age, and story fields are empty', function() {
            const button = $$(sel.submit)[0].isEnabled();
            expect(button).toEqual(false);
        });
        it('TC-020 Submit button is enabled if name, gender, age, and story fields are filled in', function() {
            const setName = $$(sel.name)[0].setValue('Andrei');
            const setGender = $$(sel.gender)[0].click();
            const setAge = $$(sel.age)[0].setValue(18);
            const clickStory = $$(sel.story)[0].click();
            const setStory = $$(sel.storyDropdown)[3].click();
            const button = $$(sel.submit)[0].isEnabled();
            expect(button).toEqual(true);
        });
        it('TC-021 Submit button text = \'Create!\'', function() {
            const text = $$(sel.submit)[0].getText();
            expect(text).toEqual(exp.submit);
        });
    });
});