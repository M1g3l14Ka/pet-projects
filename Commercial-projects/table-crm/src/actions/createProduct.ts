'use server'

import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {

  const rawData = {
    name: formData.get('name') as string,
    type: "product",
    description_short: formData.get('description_short') as string,
    description_long: formData.get('description_long') as string,
    code: formData.get('code') as string,
    unit: Number(formData.get('unit')),
    category: Number(formData.get('category')),
    cashback_type: formData.get('cashback_type') as string,
    seo_title: formData.get('seo_title') as string,
    seo_description: formData.get('seo_description') as string,
    seo_keywords: (formData.get('seo_keywords') as string)?.split(',').map(s => s.trim()) || [],
    global_category_id: Number(formData.get('global_category_id')),
    marketplace_price: Number(formData.get('marketplace_price')),
    chatting_percent: Number(formData.get('chatting_percent')),
    address: formData.get('address') as string,
    latitude: Number(formData.get('latitude')),
    longitude: Number(formData.get('longitude')),
  };

  console.log("Отправляем данные:", rawData);

  try {
    const token = 'af1874616430e04cfd4bce30035789907e899fc7c3a1a4bb27254828ff304a77';
    

    const response = await fetch(`https://app.tablecrm.com/api/v1/nomenclature/?token=${token}`, {
      method: 'POST',
      body: JSON.stringify([rawData]),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ошибка API:", errorText);
      return { success: false, error: errorText };
    }

    const result = await response.json();
    console.log("Успех:", result);
    
    revalidatePath('/');
    
    return { success: true, message: 'Карточка создана!' };

  } catch (error) {
    console.error("Ошибка сети:", error);
    return { success: false, error: 'Ошибка соединения' };
  }
}
