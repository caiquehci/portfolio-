import React, { useState } from 'react';
import { GripVertical, Loader2, RotateCcw } from 'lucide-react';

// Path: components/MarketingAgilityFlow.tsx
export default function MarketingAgilityFlow() {
    // Default order updated specifically to:
    // 1. Course Name & Header
    // 2. Campus Location
    // 3. Course Grade & Accreditation
    // 4. Course Price & Tuition
    // 5. About the Program
    // 6. Modality (Online / Hybrid)
    // 7. Student Benefits & Outcomes
    const initialBlocks = [
        { id: '1', name: 'Course Name & Header', type: 'header' },
        { id: '2', name: 'Campus Location', type: 'location' },
        { id: '3', name: 'Course Grade & Accreditation', type: 'grade' },
        { id: '4', name: 'Course Price & Tuition', type: 'price' },
        { id: '5', name: 'About the Program', type: 'about' },
        { id: '6', name: 'Modality (Online / Hybrid)', type: 'modality' },
        { id: '7', name: 'Student Benefits & Outcomes', type: 'benefits' },
    ];

    const [controlBlocks, setControlBlocks] = useState(initialBlocks);
    const [previewBlocks, setPreviewBlocks] = useState(initialBlocks);

    const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
    const [hasChanges, setHasChanges] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Desktop HTML5 Drag Handlers
    const handleDragStart = (index: number) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (draggedItemIndex === null || draggedItemIndex === index) return;

        const updated = [...controlBlocks];
        const draggedItem = updated[draggedItemIndex];
        updated.splice(draggedItemIndex, 1);
        updated.splice(index, 0, draggedItem);

        setDraggedItemIndex(index);
        setControlBlocks(updated);
        setHasChanges(true);
    };

    const handleDragEnd = () => {
        setDraggedItemIndex(null);
    };

    // Mobile Touch Handlers to support native touch dragging/reordering seamlessly
    const handleTouchStart = (index: number) => {
        setDraggedItemIndex(index);
    };

    const handleTouchMove = (e: React.TouchEvent, index: number) => {
        if (draggedItemIndex === null) return;

        // Get touch coordinates
        const touch = e.touches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        const itemNode = targetElement?.closest('[data-index]');

        if (itemNode) {
            const targetIndex = Number(itemNode.getAttribute('data-index'));
            if (!isNaN(targetIndex) && targetIndex !== draggedItemIndex) {
                const updated = [...controlBlocks];
                const draggedItem = updated[draggedItemIndex];
                updated.splice(draggedItemIndex, 1);
                updated.splice(targetIndex, 0, draggedItem);

                setDraggedItemIndex(targetIndex);
                setControlBlocks(updated);
                setHasChanges(true);
            }
        }
    };

    const handleTouchEnd = () => {
        setDraggedItemIndex(null);
    };

    // Apply changes simulation
    const handleApplyChanges = () => {
        setIsLoading(true);
        setTimeout(() => {
            setPreviewBlocks([...controlBlocks]);
            setIsLoading(false);
            setHasChanges(false);
        }, 800);
    };

    // Reset layout back to initial default
    const handleReset = () => {
        setControlBlocks(initialBlocks);
        setPreviewBlocks(initialBlocks);
        setHasChanges(false);
    };

    // Component render mapping for the PDP preview (right)
    const renderPDPContent = (type: string) => {
        switch (type) {
            case 'header':
                return (
                    <div key={type} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 transition-all duration-300">
                        <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider block mb-1">Especialização em</span>
                        <h4 className="text-base sm:text-lg font-bold text-white">Gestão Administrativa</h4>
                    </div>
                );
            case 'price':
                return (
                    <div key={type} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                            <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider block mb-0.5">Investimento</span>
                            <div className="text-xs text-neutral-500 line-through">De: 18x R$ 246,83</div>
                            <div className="text-base font-bold text-white">Por: 18x R$ 135,89</div>
                        </div>
                        <button className="bg-white text-neutral-950 text-xs font-semibold px-4 py-2.5 sm:py-2 rounded-lg transition-colors w-full sm:w-auto text-center">
                            Matricular com Desconto
                        </button>
                    </div>
                );
            case 'modality':
                return (
                    <div key={type} className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center gap-3 transition-all duration-300">
                        <span className="text-xs text-neutral-300 font-medium">🖥 Modality: Online / Polo Virtual</span>
                    </div>
                );
            case 'location':
                return (
                    <div key={type} className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center gap-3 transition-all duration-300">
                        <span className="text-xs text-neutral-300 font-medium">📍 Polo: São Paulo / Centro</span>
                    </div>
                );
            case 'grade':
                return (
                    <div key={type} className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center gap-3 transition-all duration-300">
                        <span className="text-xs text-neutral-300 font-medium">⭐ Course Grade: Nota Máxima MEC (Nota 5)</span>
                    </div>
                );
            case 'benefits':
                return (
                    <div key={type} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 transition-all duration-300 space-y-2">
                        <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider block">Benefícios UFBRA</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                            <div>✓ Taxa de inscrição grátis</div>
                            <div>✓ Inglês grátis</div>
                            <div>✓ Mensalidades fixas</div>
                            <div>✓ 50% OFF na 2ª Pós</div>
                        </div>
                    </div>
                );
            case 'about':
                return (
                    <div key={type} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 transition-all duration-300 space-y-1.5">
                        <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider block">Sobre o curso</span>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                            O curso forma profissionais capacitados para gerenciar processos administrativos complexos, liderar equipes e otimizar resultados corporativos...
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full font-sans text-neutral-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                {/* Left Side: Control Panel */}
                <div
                    className="bg-neutral-900/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4"
                    style={{ border: '1px solid rgba(141, 123, 184, 0.45)' }}
                >
                    <div>
                        <div className="flex justify-between items-center mb-4 pb-3 border-b border-neutral-800">
                            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold truncate">
                                Ditto Control Panel (Drag / Touch to reorder)
                            </span>
                        </div>

                        <div className="space-y-2.5">
                            {controlBlocks.map((block, index) => (
                                <div
                                    key={block.id}
                                    draggable
                                    data-index={index}
                                    onDragStart={() => handleDragStart(index)}
                                    onDragOver={(e) => handleDragOver(e, index)}
                                    onDragEnd={handleDragEnd}
                                    onTouchStart={() => handleTouchStart(index)}
                                    onTouchMove={(e) => handleTouchMove(e, index)}
                                    onTouchEnd={handleTouchEnd}
                                    className={`group bg-neutral-900 border rounded-lg p-3 flex items-center transition-all shadow-sm select-none cursor-grab active:cursor-grabbing touch-none ${draggedItemIndex === index
                                            ? 'border-neutral-500 bg-neutral-800 shadow-md scale-[1.02]'
                                            : 'border-neutral-800 hover:border-neutral-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="text-neutral-500 group-hover:text-neutral-300 transition-colors pointer-events-none">
                                            <GripVertical size={16} />
                                        </div>
                                        <div className="text-xs font-medium text-neutral-200 flex items-center gap-2">
                                            <span className="text-neutral-500 font-mono text-[10px]">{index + 1}.</span> {block.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reset & Apply Changes Buttons Control */}
                    <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                        <button
                            onClick={handleReset}
                            disabled={!hasChanges || isLoading}
                            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${hasChanges
                                    ? 'bg-neutral-800 text-neutral-300 border border-neutral-700 hover:bg-neutral-700 cursor-pointer'
                                    : 'bg-neutral-900 text-neutral-600 border border-neutral-800/50 cursor-not-allowed opacity-40'
                                }`}
                        >
                            <RotateCcw size={13} />
                            <span>Reset</span>
                        </button>

                        <button
                            onClick={handleApplyChanges}
                            disabled={!hasChanges || isLoading}
                            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 grow sm:grow-0 ${hasChanges
                                    ? 'bg-white text-neutral-950 cursor-pointer shadow-lg'
                                    : 'bg-neutral-900 text-neutral-600 border border-neutral-800 cursor-not-allowed opacity-60'
                                }`}
                        >
                            {isLoading && <Loader2 size={14} className="animate-spin" />}
                            <span>Apply Changes</span>
                        </button>
                    </div>
                </div>

                {/* Right Side: Live Product Display Page (PDP) Preview */}
                <div
                    className="border border-neutral-800/80 rounded-xl p-4 sm:p-5 flex flex-col space-y-3 relative"
                    style={{ backgroundColor: 'rgba(141, 123, 184, 0.15)' }}
                >
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                            Live PDP Preview
                        </span>
                    </div>

                    {/* Container with loading state overlay */}
                    <div className="relative min-h-[480px]">
                        {isLoading && (
                            <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-2 rounded-lg transition-all">
                                <Loader2 size={24} className="animate-spin text-neutral-300" />
                                <span className="text-xs font-mono text-neutral-400">Rebuilding PDP hierarchy...</span>
                            </div>
                        )}

                        <div className="space-y-3">
                            {previewBlocks.map((block) => renderPDPContent(block.type))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}