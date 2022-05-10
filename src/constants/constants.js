export const AUTHORS = {
    NONAME: 'NoName',
    BOT: 'Bot',
};

export const initialChats = {
    id1: {
        name: 'chat 1',
        messages: [
            { text: 'Message 1', author: AUTHORS.BOT },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corporis id, voluptates eaque perferendis blanditiis sint adipisci sunt dolorem provident quis expedita quam nulla similique suscipit iste vero? Aliquam, voluptatem.', author: AUTHORS.NONAME },
            { text: 'Message 3', author: AUTHORS.BOT }
        ]
    },
    id2: {
        name: 'chat 2',
        messages: [
            { text: 'Message 1', author: AUTHORS.NONAME }
        ]
    }
};

export const apiUrl = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
};
