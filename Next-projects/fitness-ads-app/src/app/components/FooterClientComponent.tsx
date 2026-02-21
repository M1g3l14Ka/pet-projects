'use client'

export default function FooterClientComponent() {

      return (
        <footer className="py-12 flex justify-center">
          <div className="relative mx-auto max-w-5xl w-full border border-gray-600 rounded-2xl p-6 md:p-8 bg-transparent">
            <div className="inline-flex items-center px-3 py-1 border border-[#81FE95] text-[#81FE95] rounded-full text-sm font-medium bg-[#0f1f12] h-10">
              <h1 className="text-lg">гарантия возврата 30 дней</h1>
            </div>

            <p className="mt-4 text-sm text-[#DCDCDC] leading-relaxed">
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели!
              Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.
            </p>
             </div>
        </footer>
  )
}
