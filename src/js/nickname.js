export default class Validator {
    validateUsername(nick) {
        const re = /^(?!.*\d{4,})(?!.*^-)(?!.*-$)(?!^_)(?!.*_$)(?!.*\d$)(?!^\d)(?!.*__)(?!.*--)[a-zA-Z0-9-_]+/;
        return re.test(nick);
    }
}