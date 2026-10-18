type TextNotification = {
    type: 'text';
    content: string;
    priority: 'low' | 'high';
};

type ImageNotification = {
    type: 'image';
    url: string;
    size: { width: number; height: number };
};

type VideoNotification = {
    type: 'video';
    url: string;
    duration: number;
};

type TNotification = TextNotification | ImageNotification | VideoNotification;

type NotificationHandlers = {
    text: (content: string, priority: 'low' | 'high') => void;
    image: (url: string, size: { width: number; height: number }) => void;
    video: (url: string, duration: number) => void;
};

function processNotifications(notifications: TNotification[], handlers: NotificationHandlers): void {
    for (const notification of notifications) {
        switch (notification.type) {
            case 'text':
                handlers.text(notification.content, notification.priority);
                break;
            case 'image':
                handlers.image(notification.url, notification.size);
                break;
            case 'video':
                handlers.video(notification.url, notification.duration);
                break;
            default: {
                const unknownNotification: never = notification;
                throw new Error(`Неизвестный тип уведомления: ${JSON.stringify(unknownNotification)}`);
            }
        }
    }
}

const notifications: TNotification[] = [
    { type: 'text', content: 'Привет!', priority: 'high' },
    { type: 'image', url: 'cat.png', size: { width: 800, height: 600 } },
    { type: 'video', url: 'lecture.mp4', duration: 95 },
];

processNotifications(notifications, {
    text: (content, priority) => console.log(`Текст: "${content}", приоритет: ${priority}`),
    image: (url, size) => console.log(`Картинка: ${url}, размер ${size.width}x${size.height}`),
    video: (url, duration) => console.log(`Видео: ${url}, длительность ${duration} с`),
});

export {};