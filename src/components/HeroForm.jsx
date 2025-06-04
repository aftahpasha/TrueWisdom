import React, { useState } from 'react';
import Button from './ui/Button';
import sparkIcon from '../../assets/images/vector.svg'; // Assuming this is the spark icon

const categories = [
  { id: 'truelove', name: 'TrueLove' },
  { id: 'truefaith', name: 'TrueFaith' },
  { id: 'trueaffirm', name: 'TrueAffirm' },
  { id: 'truefriend', name: 'TrueFriend' },
];

const HeroForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log("Category selected:", categoryId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      category: selectedCategory,
      description,
      email,
    });
    // Add form submission logic (e.g., API call)
    alert('Form submitted! Check console for data.');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden bg-white shadow-[0.0px_2.0px_4.0px_0.0px_rgba(0,0,0,0.02),0.0px_3.0px_8.0px_0.0px_rgba(0,0,0,0.03),0.0px_6.0px_18.0px_0.0px_rgba(0,0,0,0.04),0.0px_13.0px_36.0px_0.0px_rgba(0,0,0,0.05),0.0px_36.0px_98.0px_0.0px_rgba(0,0,0,0.07)] 
                 h-auto w-full max-w-xl p-8 rounded-3xl flex flex-col gap-8" // Adjusted height to auto and gap
    >
      <div className="flex flex-col gap-6"> {/* Adjusted gap */}
        <div>
          <label className="block text-sm font-medium text-brand-purple-dark mb-1.5">
            Kategori Quotes*
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200
                  ${selectedCategory === category.id
                    ? 'bg-brand-purple text-white border-brand-purple'
                    : 'text-brand-purple border-brand-purple hover:bg-brand-purple/10'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
            Deskripsikan Secara Singkat Perasaan Kamu*
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tulis disini"
            rows={4} // Adjusted rows
            className="w-full p-3 bg-brand-gray-light border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-purple-dark mb-1.5">
            Email Kamu*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email kamu"
            className="w-full p-3 bg-brand-gray-light border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple text-sm placeholder-brand-gray"
            required
          />
        </div>
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full flex items-center justify-center gap-2.5">
        <img src={sparkIcon} alt="" className="h-4 w-4" />
        Sisa 4 Quotes Gratis
      </Button>
    </form>
  );
};

export default HeroForm;
