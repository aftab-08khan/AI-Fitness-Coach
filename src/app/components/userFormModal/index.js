"use client";
import { useState } from "react";

const UserFormModal = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    fitnessGoal: "general_fitness",
    activityLevel: "moderate",
    targetWeight: "",
    injuries: "",
    workoutFrequency: "3-4",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age || formData.age < 13 || formData.age > 120)
      newErrors.age = "Please enter a valid age (13-120)";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.height || formData.height < 100 || formData.height > 250)
      newErrors.height = "Please enter valid height (100-250 cm)";
    if (!formData.weight || formData.weight < 30 || formData.weight > 300)
      newErrors.weight = "Please enter valid weight (30-300 kg)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[--green-light-900] to-[--green-300] text-gray-800 p-8 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto scrollbar-hide shadow-2xl border border-white/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Complete Your Profile
          </h2>
          {/* <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
        </div>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age*
              </label>
              <input
                required
                type="number"
                name="age"
                placeholder="25"
                value={formData.age}
                onChange={handleChange}
                min="13"
                max="120"
                className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                  errors.age ? "border-red-500" : ""
                }`}
              />
              {errors.age && (
                <p className="text-red-500 text-xs mt-1">{errors.age}</p>
              )}
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender*
            </label>
            <div className="flex space-x-4">
              {["male", "female", "other"].map((gender) => (
                <label key={gender} className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      required
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        formData.gender === gender
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {formData.gender === gender && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-700 capitalize">{gender}</span>
                </label>
              ))}
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>

          {/* Body Measurements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Height (cm)*
              </label>
              <div className="relative">
                <input
                  required
                  type="number"
                  name="height"
                  placeholder="175"
                  value={formData.height}
                  onChange={handleChange}
                  min="100"
                  max="250"
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    errors.height ? "border-red-500" : ""
                  }`}
                />
                <span className="absolute right-3 top-3 text-gray-500">cm</span>
              </div>
              {errors.height && (
                <p className="text-red-500 text-xs mt-1">{errors.height}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)*
              </label>
              <div className="relative">
                <input
                  required
                  type="number"
                  name="weight"
                  placeholder="70"
                  value={formData.weight}
                  onChange={handleChange}
                  min="30"
                  max="300"
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    errors.weight ? "border-red-500" : ""
                  }`}
                />
                <span className="absolute right-3 top-3 text-gray-500">kg</span>
              </div>
              {errors.weight && (
                <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
              )}
            </div>
          </div>

          {/* Fitness Goals */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fitness Goal
            </label>
            <select
              name="fitnessGoal"
              value={formData.fitnessGoal}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
            >
              <option value="general_fitness">General Fitness</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="endurance">Endurance Training</option>
              <option value="event_prep">Event Preparation</option>
            </select>
          </div>

          {/* Target Weight (conditional) */}
          {(formData.fitnessGoal === "weight_loss" ||
            formData.fitnessGoal === "muscle_gain") && (
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formData.fitnessGoal === "weight_loss"
                  ? "Target Weight (kg)"
                  : "Target Muscle Mass (kg)"}
              </label>
              <div className="relative">
                <input
                  required
                  type="number"
                  name="targetWeight"
                  placeholder={
                    formData.fitnessGoal === "weight_loss" ? "65" : "75"
                  }
                  value={formData.targetWeight}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
                <span className="absolute right-3 top-3 text-gray-500">kg</span>
              </div>
            </div>
          )}

          {/* Activity Level */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activity Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  value: "sedentary",
                  label: "Sedentary",
                  desc: "Little or no exercise",
                },
                {
                  value: "light",
                  label: "Light",
                  desc: "Exercise 1-3 days/week",
                },
                {
                  value: "moderate",
                  label: "Moderate",
                  desc: "Exercise 3-5 days/week",
                },
                {
                  value: "active",
                  label: "Active",
                  desc: "Exercise 6-7 days/week",
                },
                {
                  value: "very_active",
                  label: "Very Active",
                  desc: "Hard exercise daily",
                },
              ].map((level) => (
                <label key={level.value} className="flex items-start space-x-3">
                  <div className="relative mt-1">
                    <input
                      required
                      type="radio"
                      name="activityLevel"
                      value={level.value}
                      checked={formData.activityLevel === level.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        formData.activityLevel === level.value
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {formData.activityLevel === level.value && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {level.label}
                    </div>
                    <div className="text-xs text-gray-500">{level.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Workout Frequency */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workout Frequency (per week)
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "1-2", label: "1-2 times" },
                { value: "3-4", label: "3-4 times" },
                { value: "5-6", label: "5-6 times" },
                { value: "daily", label: "Daily" },
              ].map((freq) => (
                <label key={freq.value} className="flex items-center">
                  <input
                    required
                    type="radio"
                    name="workoutFrequency"
                    value={freq.value}
                    checked={formData.workoutFrequency === freq.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                      formData.workoutFrequency === freq.value
                        ? "bg-green-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {freq.label}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Injuries/Health Conditions */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Injuries/Health Conditions
            </label>
            <textarea
              name="injuries"
              placeholder="List any injuries or health conditions we should know about"
              value={formData.injuries}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 mt-8">
          {/* <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-colors duration-200"
          >
            Cancel
          </button> */}
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-800 hover:from-green-400 hover:to-green-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFormModal;
