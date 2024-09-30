const Card = ({ href, title, description }: { href: string, title: string, description: string }) => {
  const cardClass = "group rounded-lg border border-transparent px-5 py-4 m-2 transition-colors border-gray-100 bg-gray-50 dark:border-neutral-900 dark:bg-neutral-700/30 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";

  return (
    <a
      href={href}
      className={cardClass}
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </a>
  );
};


export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="h-full lg:h-screen flex flex-col items-center p-12">
      <h1 className="mb-16 text-3xl font-bold">仙台高専広瀬 学生用リンク集</h1>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card
          href="https://www.sendai-nct.ac.jp/wp/wp-content/uploads/2024/09/R06koukijikanwari_hirose_0905.pdf"
          title="時間割"
          description="令和6年度後期の時間割"
        />

        <Card
          href="https://www.sendai-nct.ac.jp/student/kyuko/ku_hirose/"
          title="休講情報"
          description="休講・授業変更の情報"
        />

        <Card
          href="https://www.sendai-nct.ac.jp/wp/wp-content/uploads/2024/03/R06gyoji-h_2024.03.27.pdf"
          title="年間行事予定"
          description="令和6年度 広瀬キャンパス行事予定表"
        />

        <Card
          href="https://syllabus.kosen-k.go.jp/Pages/PublicDepartments?school_id=07"
          title="Webシラバス"
          description="開講される科目一覧"
        />

        <Card
          href="https://kyomuweb-h.office.sendai-nct.ac.jp/gakusei/"
          title="Web教務システム"
          description="校内ネットワークからのみアクセス可能"
        />
        
        <Card
          href="https://webclass.kosen-k.go.jp/"
          title="WebClass"
          description="eラーニングシステム"
        />

        <Card
          href="https://github.com/raptech-jp/snct-links/"
          title="サイトについて"
          description="GitHubに遷移します"
        />

      </div>
      <footer className="mt-auto text-sm opacity-50">
        <p className="text-center">&copy; {currentYear} Haruki Tasaka</p>
      </footer>
    </main>
  );
}
