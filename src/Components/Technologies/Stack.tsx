export interface StackProps {
    prop: string
}

const Stack = ({ prop }: StackProps) => {
    
    return (
        <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] sticky top-24">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
                <p className="text-sm text-slate-500 mt-1">
                No technologies selected yet.
                </p>
            </div>
            <div className="border-2 border-dashed border-slate-200 rounded-xl py-12 flex items-center justify-center">
                <p className="text-sm font-medium text-slate-400">Your stack is empty.</p>
            </div>

        </div>
    )
}

export default Stack;