'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        alert('File uploaded successfully!')
        router.refresh() // Use refresh instead of push
      } else {
        throw new Error('File upload failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while uploading the file.')
    }
  }

  return (
    <div className="container text-white mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-2 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-cyan-900 text-white px-4 py-2 rounded hover:bg-cyan-800"
        >
          Upload Monthly Deal Flier
        </button>
      </form>
    </div>
  )
}


