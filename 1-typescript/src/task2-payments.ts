type CardPayment = {
    type: 'card';
    cardNumber: string;
    expiryDate: string;
    cvv: string;
};

type CashPayment = {
    type: 'cash';
    deliveryAddress: string;
    changeFrom: number;
};

type OnlinePayment = {
    type: 'online';
    walletId: string;
    email: string;
};

type PaymentMethod = CardPayment | CashPayment | OnlinePayment;

function isCardPayment(payment: PaymentMethod): payment is CardPayment {
    return payment.type === 'card';
}

function isCashPayment(payment: PaymentMethod): payment is CashPayment {
    return payment.type === 'cash';
}

function maskCardNumber(cardNumber: string): string {
    const digits = cardNumber.replace(/\D/g, '');
    const lastFour = digits.slice(-4);
    return `****-****-****-${lastFour}`;
}

function processPayment(payment: PaymentMethod): void {
    if (isCardPayment(payment)) {
        console.log(`Обработка карты: ${maskCardNumber(payment.cardNumber)}`);
    } else if (isCashPayment(payment)) {
        console.log(`Доставка по адресу: ${payment.deliveryAddress}. Нужна сдача с ${payment.changeFrom} ₽`);
    } else {
        console.log(`Оплата через кошелёк ${payment.walletId}. Подтверждение отправлено на ${payment.email}`);
    }
}

const cardPayment: CardPayment = {
    type: 'card',
    cardNumber: '4276 1234 5678 1234',
    expiryDate: '12/28',
    cvv: '123',
};

const cashPayment: CashPayment = {
    type: 'cash',
    deliveryAddress: 'г. Екатеринбург, ул. Мира, д. 32',
    changeFrom: 5000,
};

const onlinePayment: OnlinePayment = {
    type: 'online',
    walletId: 'WALLET-777',
    email: 'student@example.com',
};

processPayment(cardPayment);
processPayment(cashPayment);
processPayment(onlinePayment);

export {};