sampleApp.service('Events',
    function () {
        const events = [
            new TransactionEvent({
                id: 0,
                type: 'transaction',
                created_at: '28.01.2019',
                sign: '+',
                comment: 'Перевод за колбасу',
                from: 'Иван',
                to: 'Полина',
                cur: 'RUB',
                sum: '1000'
            }),
            new TransactionEvent({
                id: 1,
                type: 'transaction',
                created_at: '29.01.2019',
                sign: '-',
                comment: 'Возврат долга',
                from: 'Полина',
                to: 'Jack',
                cur: 'USD',
                sum: '2000'
            }),
            new NewsEvent({
                id: 2,
                type: 'news',
                created_at: '01.01.2019',
                content:
                    `<p>
                    Наступает Новый год,<br>
                    Что же он нам принесет?<br>
                    Много сладостей, тепла,<br>
                    Счастья, радости сполна!
                    </p>
                    <p>
                    Сказку добрую подарит,<br>
                    Улыбнуться всех заставит,<br>
                    Деда Мороза приведет,<br>
                    Он нам елочку зажжет...
                    </p>
                    <p>
                    Поздравляем с Новым годом.<br>
                    Пусть идет всё плавным ходом.<br>
                    Счастье с радостью пусть дружат<br>
                    И весь год вам верно служат!
                    </p>`,
                title: 'С Новым Годом!',
                viewed: true
            }),
            new NewsEvent({
                id: 3,
                type: 'news',
                created_at: '30.01.2019',
                content: `Новогодний кэшбэк за оплату покупок картой Точки.<br>
                        С 15 декабря по 31 января начисляем 5 баллов за каждую 1 000 ₽.<br>
                        Радуйте себя и близких выгодно!`,
                title: 'Новогодний кэшбэк',
                viewed: false
            })
        ];

        return {
            getEvent: (eventId, type) => events.find(event => event.id === eventId && event.type === type),
            deleteEvent: (eventId) => {
                const index = events.findIndex(event => event.id === eventId);
                if (index >= 0) {
                    events.splice(index, 1);
                }
            },
            events: events
        }
    }
);

