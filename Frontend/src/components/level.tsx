import Quest from "./questcard";
import BossBattle from "./bossbattle";

interface QuestCardData { 
    id: number;
    name: string;
    desc: string;
    xp: number; 
}

interface BossBattleData { 
    id: number;
    name: string;
    xp: number;
    desc: string;
}

interface LevelProps {
    subtitle: string;
    xp: number;
    quests: QuestCardData[];
    bossBattles: BossBattleData[];
    rewards: string[];
    progressValue: number;
}

function Level({ subtitle, xp, quests, bossBattles, rewards, progressValue }: LevelProps) {
    return (
        <div className="space-y-6 p-4">          
            <h2 className="text-2xl font-semibold text-cyan-400 mt-4">
                {subtitle} ({xp} XP)
            </h2>
            <div className="relative w-full h-3 rounded-full bg-zinc-700 overflow-hidden">
                <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressValue}%` }}
                ></div>
            </div>
            
            <Quest Quests={quests} />

            <BossBattle BossBattles={bossBattles} />

            <div className="mt-4">
                <h4 className="text-lg text-green-400 font-semibold mb-2">Rewards & Achievements</h4>
                <ul className="list-disc ml-6 text-zinc-300 space-y-1">
                    {rewards.map((reward, index) => (
                        <li key={index}>{reward}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Level;
