import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Мой Shadcn Блог</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Первый пост</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Это пример записи в блоге на shadcn/ui с компонентами Button и Card.
          </p>
          <Button>Читать дальше</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Фишки</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-6">
            <li>Next.js (App Router)</li>
            <li>Tailwind + тема в стиле shadcn</li>
            <li>UI-компоненты: Button, Card</li>
            <li>Запуск строго в Docker</li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}