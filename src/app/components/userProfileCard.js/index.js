import { RxAvatar } from "react-icons/rx";
import { CardSpotlight } from "../ui/card-spotlight";
import { FiEdit } from "react-icons/fi";
import {
  FaHeartbeat,
  FaRunning,
  FaWeight,
  FaRulerVertical,
} from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

export function UserProfileCard({ data, onEdit }) {
  // Format fitness goal for display
  const formatFitnessGoal = (goal) => {
    const goals = {
      general_fitness: "General Fitness",
      weight_loss: "Weight Loss",
      muscle_gain: "Muscle Gain",
      endurance: "Endurance Training",
      event_prep: "Event Preparation",
    };
    return goals[goal] || goal;
  };

  // Format activity level for display
  const formatActivityLevel = (level) => {
    const levels = {
      sedentary: "Sedentary",
      light: "Light Activity",
      moderate: "Moderate Activity",
      active: "Active",
      very_active: "Very Active",
    };
    return levels[level] || level;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="h-auto p-6 col-span-1 bg-black">
          <div className="flex flex-col items-center">
            <div className="relative">
              <RxAvatar className="w-24 h-24 text-[--green-400] hover:text-green-400 transition-colors" />
              <button
                onClick={onEdit}
                className="absolute -bottom-2 -right-2 text-[--green-400] hover:bg-[--green-700] text-white p-2 rounded-full shadow-md transition-all"
                aria-label="Edit profile"
              >
                <FiEdit className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold mt-4 capitalize text-white hover:text-[--green-200] transition-colors cursor-default">
              {data?.name}
            </h2>
            <p className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors cursor-default">
              {data?.email}
            </p>

            <div className="mt-6 w-full space-y-3">
              <StatCard
                icon={
                  <FaHeartbeat className="text-green-400 hover:text-green-300" />
                }
                label="Age"
                value={data?.age}
                unit="years"
              />
              <StatCard
                icon={
                  <FaRulerVertical className="text-blue-400 hover:text-blue-300" />
                }
                label="Height"
                value={data?.height}
                unit="cm"
              />
              <StatCard
                icon={
                  <FaWeight className="text-purple-400 hover:text-purple-300" />
                }
                label="Weight"
                value={data?.weight}
                unit="kg"
              />
            </div>
          </div>
        </div>

        {/* Fitness Goals Card */}
        <div className="h-auto p-6 col-span-1 md:col-span-2 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[--green-300] mb-3 flex items-center hover:text-[--green-light-900] transition-colors cursor-default">
                  <GiMuscleUp className="mr-2 text-green-100 hover:text-green-300" />
                  Fitness Goals
                </h3>
                <div className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800/70 transition-colors">
                  <Detail
                    label="Primary Goal"
                    value={formatFitnessGoal(data?.fitnessGoal)}
                  />
                  {data?.targetWeight && (
                    <Detail label="Target" value={`${data.targetWeight} kg`} />
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center hover:text-blue-400 transition-colors cursor-default">
                  <FaRunning className="mr-2 text-blue-400 hover:text-blue-300" />
                  Activity
                </h3>
                <div className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800/70 transition-colors">
                  <Detail
                    label="Activity Level"
                    value={formatActivityLevel(data?.activityLevel)}
                  />
                  <Detail
                    label="Workout Frequency"
                    value={`${data?.workoutFrequency.replace(
                      "-",
                      " to "
                    )} times/week`}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3 hover:text-white/90 transition-colors cursor-default">
                Health Notes
              </h3>
              <div className="bg-neutral-800/50 rounded-lg p-4 h-full hover:bg-neutral-800/70 transition-colors">
                <Detail
                  label="Injuries/Conditions"
                  value={data?.injuries || "None reported"}
                  fullWidth
                />
                {!data?.injuries && (
                  <p className="text-neutral-400 text-sm mt-2 hover:text-neutral-300 transition-colors cursor-default">
                    No health concerns reported. Remember to update this if
                    anything changes.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Card Component
const StatCard = ({ icon, label, value, unit }) => (
  <div className="flex items-center p-3 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-colors group">
    <div className="p-2 bg-neutral-900 rounded-full mr-3 group-hover:bg-neutral-800 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
        {label}
      </p>
      <p className="text-white font-medium group-hover:text-white/90 transition-colors">
        {value}{" "}
        <span className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
          {unit}
        </span>
      </p>
    </div>
  </div>
);

// Reusable Detail Component with enhanced styling
const Detail = ({ label, value, fullWidth = false }) => (
  <div
    className={`py-2 ${fullWidth ? "" : "border-b border-neutral-700"} group`}
  >
    <p className="text-xs text-neutral-400 mb-1 group-hover:text-neutral-300 transition-colors">
      {label}
    </p>
    <p
      className={`text-white ${
        fullWidth ? "break-words" : ""
      } group-hover:text-white/90 transition-colors`}
    >
      {value}
    </p>
  </div>
);
