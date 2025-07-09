interface QuestCard {
    id: number;
    name: string;
    xp:number;
    desc: string;
}
interface QuestProps {
    Quests: QuestCard[];
}

function Quest({ Quests }: QuestProps) {

    return (
        <div className="flex flex-wrap items-start justify-center gap-12">
            {Quests.map((Quests) => (
                <div key={Quests.id} className="flex flex-col gap-6 w-140 items-start justify-center bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-lg py-8 px-10">
                    <div className="flex flex-col items-start justify-around">
                        <h1 className="robotocondensed-text text-2xl">{Quests.name}</h1>
                        <p className="robotocondensed-text text-lg">{Quests.desc}</p>

                    </div>
                    <button className="robotocondensed-text text-1xl bg-white text-black py-2 px-8 rounded-lg hover:bg-black transition duration-300 hover:text-white">
                        Start Quest
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Quest;