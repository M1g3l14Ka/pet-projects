'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { toast } from "sonner"

import { createProduct } from "@/actions/createProduct";
import { generateSeo } from "@/actions/generateSEO";

export default function CardComponent() {
    
    async function clientAction(formData: FormData) {
        const result = await createProduct(formData)

        if(result.success) {
            toast.success('Товар успешно создан в базе!')
        } else {
            toast.error("Ошибка AI: " + result.error)
            return
        }
    }

    const [isGenerating, setIsGenerating] = useState(false);

    async function handleGenerateAI() {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const productName = nameInput?.value;

        if (!productName) {
            alert("Сначала введи 'Название' товара (например: iPhone 15), чтобы AI понял, о чем писать!");
            return;
        }

        setIsGenerating(true);

        try {
            const result = await generateSeo(productName);

            if (result.success && result.data) {
                (document.getElementById('seo_title') as HTMLInputElement).value = result.data.title;
                (document.getElementById('seo_description') as HTMLTextAreaElement).value = result.data.description;
                (document.getElementById('seo_keywords') as HTMLInputElement).value = result.data.keywords;
                (document.getElementById('description_short') as HTMLTextAreaElement).value = result.data.short_desc;
                (document.getElementById('description_long') as HTMLTextAreaElement).value = result.data.long_desc;
            } else {
                alert("Ошибка AI: " + result.error);
            }
        } catch (error) {
            console.error("AI упал:", error);
        } finally {
            setIsGenerating(false);
        }
    }
    
    return (
        <main className="min-h-screen bg-[#050505] p-8 flex justify-center items-center text-white text-2xl">
            <Card className="w-full max-w-4xl bg-zinc-700 border-zinc-500 text-white">
                <CardHeader>
                    <CardTitle className="text-3xl">Создание карточки товара</CardTitle>
                    <CardDescription className="text-zinc-300">Заполните данные товары для создания карточки</CardDescription>
                </CardHeader>

                <CardContent>
                    <form action={clientAction} className="space-y-4">
                        <div className="space-y-4 border border-zinc-800 p-4 rounded-xl bg-zinc-900/50">
                            <h3 className="text-lg font-semibold text-blue-400">О товаре</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Название *</Label>
                                    <Input id="name" name="name" required placeholder="Например: IPhone 15 Pro" className="bg-zinc-950 border-zinc-700" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="code">Артикул (Code)</Label>
                                    <Input id="code" name="code" required placeholder="ART-001" className="bg-zinc-950 border-zinc-700" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="category">ID Категории</Label>
                                        <Input id="category" name="category" type="number" required placeholder="2477" className="bg-zinc-950 border-zinc-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="global_category_id">Global ID</Label>
                                        <Input id="global_category_id" name="global_category_id" type="number" required placeholder="127" className="bg-zinc-950 border-zinc-700" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                     <Label htmlFor="unit">Ед. измерения (ID)</Label>
                                     <Input id="unit" name="unit" type="number" required placeholder="116" className="bg-zinc-950 border-zinc-700" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 border border-zinc-800 p-4 rounded-xl bg-zinc-900/50">
                            <h3 className="text-lg font-semibold text-green-400">Цена и Кешбэк</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="marketplace_price">Цена (₽)</Label>
                                    <Input id="marketplace_price" name="marketplace_price" type="number" min="0" required placeholder="5000" className="bg-zinc-950 border-zinc-700 font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="chatting_percent">Процент бонусов</Label>
                                    <Input id="chatting_percent" name="chatting_percent" type="number" min="1" max="100" required placeholder="4" className="bg-zinc-950 border-zinc-700" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cashback_type">Тип кешбэка</Label>
                                    <Input id="cashback_type" name="cashback_type" required defaultValue="lcard_cashback" className="bg-zinc-950 border-zinc-700" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 border border-zinc-800 p-4 rounded-xl bg-zinc-900/50">
                            <h3 className="text-lg font-semibold text-purple-400">Где забирать?</h3>
                            <div className="space-y-2">
                                <Label htmlFor="address">Полный адрес</Label>
                                <Input id="address" name="address" required placeholder="г. Казань, ул..." className="bg-zinc-950 border-zinc-700" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="latitude">Широта (Lat)</Label>
                                    <Input id="latitude" name="latitude" type="number" step="0.000001" required placeholder="55.77..." className="bg-zinc-950 border-zinc-700" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="longitude">Долгота (Lon)</Label>
                                    <Input id="longitude" name="longitude" type="number" step="0.000001" required placeholder="49.10..." className="bg-zinc-950 border-zinc-700" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 border border-zinc-800 p-4 rounded-xl bg-zinc-900/50">
                            <h3 className="text-yellow-500">SEO генерация</h3>
                            <div onClick={handleGenerateAI} className={`${isGenerating ? "pointer-events-none opacity-50" : ""}`}>
                                <Badge variant="secondary" className="cursor-pointer hover:bg-yellow-500/20 hover:text-yellow-500 transition-colors">
                                    {isGenerating ? "⏳ Нейронка думает..." : "✨ AI Generate"}
                                </Badge>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description_short">Краткое описание</Label>
                                <Textarea id="description_short" name="description_short" required className="bg-zinc-950 border-zinc-700 h-20" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description_long">Полное описание</Label>
                                <Textarea id="description_long" name="description_long" required className="bg-zinc-950 border-zinc-700 h-32" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="seo_title">SEO Title</Label>
                                    <Input id="seo_title" name="seo_title" required className="bg-zinc-950 border-zinc-700" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="seo_keywords">Keywords (через запятую)</Label>
                                    <Input id="seo_keywords" name="seo_keywords" required placeholder="SEO, Ключи, Товар" className="bg-zinc-950 border-zinc-700" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="seo_description">SEO Description</Label>
                                <Textarea id="seo_description" name="seo_description" required className="bg-zinc-950 border-zinc-700 h-20" />
                            </div>
                        </div>

                        <Button type="submit" className="w-full hover:border-white/80 text-xl font-bold bg-blue-700 hover:bg-blue-600">
                            Создать карточку
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}