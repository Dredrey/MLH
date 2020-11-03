const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('My Little Hero', function () {
    describe('General', function () {
        it('TC-001 title = \'MLH trial\'', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero#');
            const text = browser.getTitle();
            expect(text).toEqual(exp.title);
        });
        it('TC-002 Page level title =\'My Little Hero\'', function () {
            const text = $$(sel.pageTitle)[0].getText();
            expect(text).toEqual(exp.pageTitle);
        });
        it('TC-003 Description = \'Let\'s create your own HERO! It\'s super easy with our application!\'', function () {
            const text = $$(sel.desc)[0].getText();
            expect(text).toEqual(exp.desc);
        });

    });
    describe('All labels are present', function () {
        it('TC-004 Label for name', function () {
            const text = $$(sel.label)[0].isDisplayed();
            expect(text).toEqual(true);
        });
        it('TC-005 Label for gender', function () {
            const text = $$(sel.label)[1].isDisplayed();
            expect(text).toEqual(true);
        });
        it('TC-006 Label for age', function () {
            const text = $$(sel.label)[2].isDisplayed();
            expect(text).toEqual(true);
        });
        it('TC-007 Label for story', function () {
            const text = $$(sel.label)[3].isDisplayed();
            expect(text).toEqual(true);
        });
        it('TC-008 Label for image', function () {
            const text = $$(sel.label)[4].isDisplayed();
            expect(text).toEqual(true);
        });
    });
    describe('Labels have correct text', function () {
        it('TC-009 Name label = 1. What is your HERO\'s name?', function () {
            const text = $$(sel.label)[0].getText();
            expect(text).toEqual(exp.labelName);
        });
        it('TC-010 Gender label = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getText();
            expect(text).toEqual(exp.labelGender);
        });
        it('TC-011 Age label = 3. How old is your hero?', function () {
            const text = $$(sel.label)[2].getText();
            expect(text).toEqual(exp.labelAge);
        });
        it('TC-012 Story label = 4. What type of story would you like to read?', function () {
            const text = $$(sel.label)[3].getText();
            expect(text).toEqual(exp.labelStory);
        });
        it('TC-013 Image label = 5. Upload an image (optional).', function () {
            const text = $$(sel.label)[4].getText();
            expect(text).toEqual(exp.labelImage);
        });
    });
    describe('Name input field', function () {
        it('TC-0xx Name input field is displayed', function () {
            const input = $(sel.name).isDisplayed();
            expect(input).toEqual(true);
        });
        it('TC-014 Name placeholder = \'Hero\'s name\'', function () {
            const text = $(sel.name).getAttribute('placeholder');
            expect(text).toEqual(exp.phName);
        });
        it('TC-015 Name input field can accept a maximum of 70 characters', function () {
            let input = $(sel.name);
            let warning = $(sel.nameWarning);
            while(warning.isExisting() === false){
                input.addValue('a');
            }
            expect(input.getAttribute('value').length).toEqual(70);
            input.clearValue();
        });
    });
    describe('Gender radio buttons', function () {
        it('TC-016 radio button for \'he\' is displayed', function () {
            const button = $$(sel.gender)[0].isDisplayed();
            expect(button).toEqual(true);
        });
        it('TC-017 radio button for \'she\' is displayed', function () {
            const button = $$(sel.gender)[1].isDisplayed();
            expect(button).toEqual(true);
        });
        it('TC-018 radio button for \'it\' is displayed', function () {
            const button = $$(sel.gender)[2].isDisplayed();
            expect(button).toEqual(true);
        });
        it('TC-019 radio button for \'he\' reads \'he\'', function () {
            const text = $$(sel.gender)[0].getText();
            expect(text).toEqual(exp.genderBoy);
        });
        it('TC-020 radio button for \'she\' reads \'she\'', function () {
            const text = $$(sel.gender)[1].getText();
            expect(text).toEqual(exp.genderGirl);
        });
        it('TC-021 radio button for \'it\' reads \'it\'', function () {
            const text = $$(sel.gender)[2].getText();
            expect(text).toEqual(exp.genderElse);
        });
    });
    describe('Age input field', function () {
        it('TC-022 Age input field is displayed', function () {
            const input = $(sel.age).isDisplayed();
            expect(input).toEqual(true);
        });
        it('TC-023 Age placeholder = \'Hero\'s age\'', function () {
            const text = $(sel.age).getAttribute('placeholder');
            expect(text).toEqual(exp.phAge);
        });
    });
    describe('Story dropdown menu', function () {
        it('TC-024 story dropdown menu is displayed', function () {
            const menu = $(sel.story).isDisplayed();
            expect(menu).toEqual(true);
        });
        it('TC-025 Story placeholder = \'Type of the story\'', function () {
            const text = $(sel.phStory).getText();
            expect(text).toEqual(exp.phStory);
        });
        it('TC-026 \'Overcoming the Monster\' is a type of story', function () {
            $(sel.story).click();
            let text = '';
            for (let i = 0; i < $$(sel.storyDropdown).length; i++) {
                if ($$(sel.storyDropdown)[i].getAttribute('title') === exp.storyChoice1) {
                    text = exp.storyChoice1;
                    break;
                }
            }
            expect(text).toEqual(exp.storyChoice1);
        });
        it('TC-027 \'Rebirth\' is a type of story', function () {
            let text = '';
            for (let i = 0; i < $$(sel.storyDropdown).length; i++) {
                if ($$(sel.storyDropdown)[i].getAttribute('title') === exp.storyChoice2) {
                    text = exp.storyChoice2;
                    break;
                }
            }
            expect(text).toEqual(exp.storyChoice2);
        });
        it('TC-028 \'Quest\' is a type of story', function () {
            let text = '';
            for (let i = 0; i < $$(sel.storyDropdown).length; i++) {
                if ($$(sel.storyDropdown)[i].getAttribute('title') === exp.storyChoice3) {
                    text = exp.storyChoice3;
                    break;
                }
            }
            expect(text).toEqual(exp.storyChoice3);
        });
        it('TC-029 \'Journey and Return\' is a type of story', function () {
            let text = '';
            for (let i = 0; i < $$(sel.storyDropdown).length; i++) {
                if ($$(sel.storyDropdown)[i].getAttribute('title') === exp.storyChoice4) {
                    text = exp.storyChoice4;
                    break;
                }
            }
            expect(text).toEqual(exp.storyChoice4);
        });
        it('TC-030 \'Rags and Riches\' is a type of story', function () {
            let text = '';
            for (let i = 0; i < $$(sel.storyDropdown).length; i++) {
                if ($$(sel.storyDropdown)[i].getAttribute('title') === exp.storyChoice5) {
                    text = exp.storyChoice5;
                    break;
                }
            }
            expect(text).toEqual(exp.storyChoice5);
        });
        it('TC-031 \'Tragedy\' is a type of story', function () {
            let text = '';
            for (let i = 0; i < $$(sel.storyDropdown).length; i++) {
                if ($$(sel.storyDropdown)[i].getAttribute('title') === exp.storyChoice6) {
                    text = exp.storyChoice6;
                    break;

                }
            }
            expect(text).toEqual(exp.storyChoice6);
        });
        it('TC-032 \'Comedy\' is a type of story', function () {
            let text = '';
            for (let i = 0; i < $$(sel.storyDropdown).length; i++) {
                if ($$(sel.storyDropdown)[i].getAttribute('title') === exp.storyChoice7) {
                    text = exp.storyChoice7;
                    break;
                }
            }
            expect(text).toEqual(exp.storyChoice7);
            $(sel.story).click();
        });
    });
    describe('Image upload', function () {
        it('TC-033 Image upload placeholder = \'drag and drop your image here or browse\'', function () {
            const text = $$(sel.phImage)[1].getText();
            expect(text).toEqual(exp.phImage);
        });
    });
    describe('Submit button', function () {
        it('TC-034 Submit button is disabled if name, gender, age, and story fields are empty', function () {
            const button = $$(sel.submit)[0].isEnabled();
            expect(button).toEqual(false);
        });
        it('TC-035 Submit button is enabled if name, gender, age, and story fields are filled in', function () {
            $(sel.name).setValue('Andrei'); //sets name to "Andrei"
            $$(sel.gender)[0].click(); //sets gender to "he"
            $(sel.age).setValue(18); //sets age to 18
            $(sel.story).click(); //opens the dropdown for the story
            $$(sel.storyDropdown)[3].click(); //chooses the "Journey and Return" story
            const button = $$(sel.submit)[0].isEnabled();
            expect(button).toEqual(true);
        });
        it('TC-036 Submit button text = \'Create!\'', function () {
            const text = $$(sel.submit)[0].getText();
            expect(text).toEqual(exp.submit);
        });
    });
});