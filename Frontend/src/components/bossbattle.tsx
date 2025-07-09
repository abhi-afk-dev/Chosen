interface BossBattle {
    id: number;
    name: string;
    xp:number;
    desc: string;
}
interface BossBattleProps {
    BossBattles: BossBattle[];
}

function BossBattle({ BossBattles }: BossBattleProps) {

    return (
        <div className="flex w-full items-start justify-center gap-12">
            {BossBattles.map((BossBattles) => (
                <div key={BossBattles.id} className="flex w-full flex-col items-start justify-center bg-[#463671]/60 backdrop-blur-md border border-white/30 shadow-lg rounded-lg py-4 px-10">
                    <div className="flex flex-col items-start justify-around p-4 ">
                        <h1 className="robotocondensed-text text-2xl">{BossBattles.name}</h1>
                        <p className="robotocondensed-text text-lg">{BossBattles.desc}</p>

                    </div>
                    <button className="robotocondensed-text text-1xl bg-white text-black py-2 px-8 rounded-lg hover:bg-black transition duration-300 hover:text-white">
                        Start Boss Quest
                    </button>
                </div>
            ))}
        </div>
    )
}
export default BossBattle;