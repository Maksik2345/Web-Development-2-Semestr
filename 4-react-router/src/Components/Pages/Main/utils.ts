export function base64ToFile(base64String: string, filename: string): File {
  // Извлекаем MIME-тип и данные
  const matches = base64String.match(/^data:([^;]+);base64,(.+)$/);

  if (!matches) {
    throw new Error('Invalid base64 string format');
  }

  const mimeType = matches[1];
  const base64Data = matches[2];

  // Конвертируем base64 в бинарные данные
  const binaryString = atob(base64Data);

  // Создаем ArrayBuffer напрямую
  const bytes = new ArrayBuffer(binaryString.length);
  const view = new Uint8Array(bytes);

  for (let i = 0; i < binaryString.length; i++) {
    view[i] = binaryString.charCodeAt(i);
  }

  // Используем ArrayBuffer напрямую
  return new File([bytes], filename, { type: mimeType });
}

export function displayImage(file: File) {
  const imageUrl = URL.createObjectURL(file);
  return imageUrl;
}
